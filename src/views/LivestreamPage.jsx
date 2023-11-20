import './livestreamPage.css';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const LivestreamPage = () => {
  const { livestreamId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const appID = 557011077;
  const serverSecret = "e22904e3796a1266d54229d722ac631d";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, livestreamId,  uuidv4(),  localStorage.getItem('name'));

  const showDonationModal = () => {
    setShowModal(true);
  }

  const myMeeting = async (element) => {
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role: localStorage.getItem('name') === 'Akbar' ? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience,
        },
      },
    });
  };

  return (
    <div>
      <div>
        {
          localStorage.getItem('name') !== 'Akbar' &&
          <div className="gift-button">
            <i class="bi bi-gift-fill" style={{fontSize: '30px'}} onClick={showDonationModal}></i>
          </div>
        }
        <div
          className="myCallContainer"
          ref={myMeeting}
          style={{ width: '100vw', height: '100vh' }}
        >
        </div>
      </div>
      {
        localStorage.getItem('name') !== 'Akbar' && showModal &&
        <div style={{backgroundColor: 'rgba(0,0,0,.6)', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 99999, top: 0}}>
          <Donation setShowModal={setShowModal} />
        </div>
      }
    </div>
  );
}

export default LivestreamPage;