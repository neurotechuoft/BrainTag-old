//create react app with create-react-app app-name
//must install npm i --save socket.io
//also install npm i --save socket.io-client
const io = require('socket.io')();

io.on('connection', (client) => {
  // server side handler for client event to start a timer
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval', interval);
    // start a timer and emit event back to the client
    setInterval(() => {
      client.emit('timer', new Date())
    }, interval);
  });

  // start stream of random data
  client.on('subscribeToRandomData', (interval) => {
    console.log('client is subscribing to random data with an interval of', interval);
    setInterval(() => {
      const randomDataPoint = Math.floor(Math.random() * 10);
      client.emit('randomData', randomDataPoint)
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port', port);

