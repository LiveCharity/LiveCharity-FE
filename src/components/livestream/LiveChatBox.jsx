import './style.css';
import LiveChatBoxHeader from './LiveChatBoxHeader';
import LiveChatBoxListContainer from './LiveChatBoxListContainer';
import AgoraRTM from 'agora-rtm-sdk';
import { useEffect, useState } from 'react';


const AAP_ID = 'e48b377dba3e45f4957c585fd6aa48f6';
const token = null;
const client = AgoraRTM.createInstance(AAP_ID);
const channelName = 'Charity';
const uid = localStorage.getItem('name');

const LiveChatBox = () => {
  const [text, setText] = useState('');
  const [channel, setChannel] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if(text === '') return
    channel.sendMessage({
      text,
      type: 'text'
    });
    setMessages(prevMessages => [...prevMessages, { uid, text }]);
    setText('');
  }

  useEffect(() => {
    const connect = async() => {
      await client.login({ uid, token })
      const channel = await client.createChannel(channelName);
      await channel.join();
      channel.on('ChannelMessage', (message, memberId) => {
        setMessages(prevMessages => [...prevMessages, { uid: memberId, text: message.text }]);
      })

      setChannel(channel);
      return channel;
    }
    const connection = connect();

    return () => {
      const logout = async() => {
        const channel = await connection;
        await client.logout();
        await channel.leave();
      }
      logout()
    }
  }, [])

  return (
    <div className="live-chat-box-container">
      <LiveChatBoxHeader />
      <LiveChatBoxListContainer messages={messages} />
      <form className="live-chat-box-message-form" onSubmit={sendMessage}>
          <input 
            type="text" 
            name="message" 
            placeholder="Send a message...." className="live-chat-box-message-input" 
            autoComplete="false"
            onChange={(e) => setText(e.currentTarget.value)}
            value={text}
          />
      </form>
    </div>
  )
}

export default LiveChatBox