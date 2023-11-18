import './style.css';
import { useNavigate } from 'react-router-dom';

const LivestreamHeader = ({ viewerCount }) => {
  const navigation = useNavigate();

  return (
    <header className="livestream-header">
      <div className="livestream-header-right">
        <p className="livestream-header-text">Live Now</p>
        <div className="viewer-count-container">
          <p className="viewer-count-text">{viewerCount}</p>
        </div>
      </div>
      <div className="livestream-header-btn-wrapper">
        {
          localStorage.getItem('name') !== 'Akbar' ?
          <>
            <button className="livestream-header-top-up-btn">Top Up</button>
            <button className="livestream-header-donate-btn">Donate</button>
            <button className="livestream-header-leave-room-btn">Leave Room</button>
          </> :
          <button 
            className="livestream-header-leave-room-btn"
            onClick={() => navigation('/')}
          >End Livestream</button>
        }
      </div>
    </header>
  )
}

export default LivestreamHeader