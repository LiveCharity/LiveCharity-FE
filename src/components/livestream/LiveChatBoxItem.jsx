import './style.css';

const LiveChatBoxItem = ({ uid, text, username }) => {
  return (
    <div className="live-chat-box-item">
      <img src="https://api.dicebear.com/7.x/bottts/png" alt="avatar" width={30} height={30} />
      <div className="live-chat-box-info-wrapper">
        <p className="live-chat-box-info-name">{uid}</p>
        <p className="live-chat-box-info-message">{text}</p>
      </div>
    </div>
  )
}

export default LiveChatBoxItem;