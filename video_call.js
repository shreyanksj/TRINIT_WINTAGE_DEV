// Initialize SimpleWebRTC
const webrtc = new SimpleWebRTC({
    localVideoEl: 'localVideo',
    remoteVideosEl: 'remoteVideo',
    autoRequestMedia: true,
  });
  
  // Add event listeners for call controls
  document.getElementById('startCall').addEventListener('click', () => {
    webrtc.joinRoom('roomName');
  });
  
  document.getElementById('endCall').addEventListener('click', () => {
    webrtc.leaveRoom();
  });
  