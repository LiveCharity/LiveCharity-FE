import './style.css';
import LivestreamVideo from './LivestreamVideo';

const LivestreamVideoContainer = ({ users, toggleCamera,toggleMic }) => {
  return (
    <div className={localStorage.getItem('name') === 'Akbar' ? 'host-mode' : 'viewer-mode'}>
      {
        users.map((user, index) => {
          if(index === 0) {
            return (
              <LivestreamVideo key={user.uid} user={user} />
            )
          }
          return null;
        })
      }
      {
        localStorage.getItem('name') === 'Akbar' &&
        <div className="live-control-container">
          <button onClick={toggleCamera}>Camera</button>
          <button onClick={toggleMic}>Microphone</button>
        </div>
      }
    </div>
  )
}

export default LivestreamVideoContainer;