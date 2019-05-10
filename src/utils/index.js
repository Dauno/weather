const moment = require('moment-timezone');

const utils = {
  toCelsius(temperature) {
    return parseFloat(((temperature - 32) * 5/9).toFixed(1));
  },
  formatTime(time, timezone,format) {
    return moment.tz(time * 1000, timezone).format('HH:mm');
  },
  async asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }
}

module.exports = utils;