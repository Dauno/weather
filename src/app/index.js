const io = require('socket.io');
const { getCitiesData } = require('../modules/weather');
const { socket: { port, interval } } = require('../config');

const server = io.listen(port);

console.log(`Servidor corriendo en http://localhost:${port}`);

server.on('connection', async (socket) => {
  const data = await getCitiesData();
  socket.emit('citiesData', data);
});

setInterval(async () => {
  const data = await getCitiesData();
  server.sockets.emit('citiesData', data);
}, interval);