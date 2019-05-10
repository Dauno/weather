const io = require('socket.io');
const { PORT, INTERVAL } = require('../config');
const { getCitiesData } = require('../modules/weather');

require('dotenv').config();

const server = io.listen(PORT);

server.on('connection', async (socket) => {
  console.log('connection');
  const data = await getCitiesData();
  socket.emit('citiesData', data);
});

setInterval(async () => {
  const data = await getCitiesData();
  server.sockets.emit('citiesData', data);
}, INTERVAL);