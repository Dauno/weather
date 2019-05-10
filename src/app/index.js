const io = require('socket.io');
require('dotenv').config();
const { getCitiesData } = require('../modules/weather');
const { PORT, INTERVAL } = require('../config');

const server = io.listen(PORT);

server.on('connection', async (socket) => {
  const data = await getCitiesData();
  socket.emit('citiesData', data);
  socket.on('getData', async () => {
    const data = await getCitiesData();
    socket.emit('citiesData', data);  
  });
});
