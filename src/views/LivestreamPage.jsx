import './livestreamPage.css';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';
import Donation from '../components/formInput/Donation';
import { useState } from 'react';
import NavbarCustom from '../components/NavbarCustom';

const LivestreamPage = () => {
  const { roomId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const appID = 557011077;
  const serverSecret = "e22904e3796a1266d54229d722ac631d";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, "roomId",  uuidv4(),  localStorage.getItem('username'));

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
          role: JSON.parse(localStorage.getItem('isOwner'))? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience,
        },
      },
    });
  };

  return (
    <div>
      <NavbarCustom />
      <div>
        {
          !JSON.parse(localStorage.getItem('isOwner')) &&
          <div className="gift-button">
            <i className="bi bi-gift-fill" style={{fontSize: '30px'}} onClick={showDonationModal}></i>
          </div>
        }
        <div
          className="myCallContainer"
          ref={myMeeting}
          style={{ width: '100vw', height: 'calc(100vh - 70px)' }}
        >
        </div>
      </div>
      {
        !JSON.parse(localStorage.getItem('isOwner'))&& showModal &&
        <div style={{backgroundColor: 'rgba(0,0,0,.6)', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 99999, top: 0}}>
          <Donation setShowModal={setShowModal} />
        </div>
      }
    </div>
  );
}

export default LivestreamPage;