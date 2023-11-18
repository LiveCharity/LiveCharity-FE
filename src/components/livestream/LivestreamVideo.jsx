import { useEffect, useRef } from 'react';

const LivestreamVideo = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack?.play(ref.current);
    user.audioTrack?.play(ref.current);
  }, []);
  
  return (
      <div 
        ref={ref} 
        style={{
          width: '100%', 
          height: '100%', 
          backgroundImage: 'url(https://api.dicebear.com/7.x/bottts/png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
      </div>
  )
}

export default LivestreamVideo;