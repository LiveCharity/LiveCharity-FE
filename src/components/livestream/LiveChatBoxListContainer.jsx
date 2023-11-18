import './style.css';
import LiveChatBoxItem from './LiveChatBoxItem';

const LiveChatBoxListContainer = ({ messages }) => {
  return (
    <div className="live-chat-box-list-container">
      {messages.map((message, index) => {
        return (
          <LiveChatBoxItem key={index} uid={message.uid}  text={message.text}  />
        )
      })}
    </div>
  )
}

export default LiveChatBoxListContainer