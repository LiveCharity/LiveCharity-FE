import AgoraRTM from 'agora-rtm-sdk';
import AgoraRTC from 'agora-rtc-sdk-ng';

export const APP_ID = 'e48b377dba3e45f4957c585fd6aa48f6';
export const rtmClient = AgoraRTM.createInstance(APP_ID);
export const channelName = 'Charity';
export const token = null;
export const rtcClient = AgoraRTC.createClient({
  mode:'rtc',
  codec: 'vp8'
})
