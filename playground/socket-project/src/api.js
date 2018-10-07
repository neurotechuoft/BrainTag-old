import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  //subscribe to timer event; prevent race condition where timer events emitted from server but client cannot recieve
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeToRandomData(cb) {
  socket.on('randomData', randomDataPoint => cb(randomDataPoint));
  socket.emit('subscribeToRandomData', 1000);
}

export { subscribeToTimer, subscribeToRandomData };