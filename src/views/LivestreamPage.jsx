import './livestreamPage.css';
import { useEffect, useState } from 'react';
import LivestreamHeader from '../components/livestream/LivestreamHeader';
import LivestreamVideoContainer from '../components/livestream/LivestreamVideoContainer';
import LiveChatBox from '../components/livestream/LiveChatBox';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { rtcClient, APP_ID, channelName, token } from '../config/agora';

export default function LivestreamPage() {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);

  const handleUserJoined = async (user, mediaType) => {
    await rtcClient.subscribe(user, mediaType);
    if (mediaType === 'video') {
      setUsers((previousUsers) => [...previousUsers, user]);
    }

    if (mediaType === 'audio') {
      // user.audioTrack.play()
    }
  };

  const handleToggleCamera = async () => {
    if(localTracks[1].muted) {
      await localTracks[1].setMuted(false);
    } else {
      await localTracks[1].setMuted(true);
    }
  }

  const handleToggleMic = async () => {
    if(localTracks[0].muted) {
      await localTracks[0].setMuted(false);
    } else {
      await localTracks[0].setMuted(true);
    }
  }

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

  useEffect(() => {
    rtcClient.on('user-published', handleUserJoined);
    rtcClient.on('user-left', handleUserLeft);

    rtcClient
      .join(APP_ID, channelName, token, null)
      .then((uid) => {
        return Promise.all([
          AgoraRTC.createMicrophoneAndCameraTracks(),
          uid,
        ])
      })
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        rtcClient.publish(tracks);
      });
    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      rtcClient.off('user-published', handleUserJoined);
      rtcClient.off('user-left', handleUserLeft);
      rtcClient.unpublish(localTracks).then(() => rtcClient.leave());
    };
  }, []);

  return (
    <div className="livestream-container">
      <LivestreamHeader viewerCount={users.length} />
      <div className="livestream-layout">
        <LivestreamVideoContainer 
          users={users} 
          toggleCamera={handleToggleCamera} 
          toggleMic={handleToggleMic} 
        />
        <LiveChatBox />
      </div>
    </div>
  );
}
