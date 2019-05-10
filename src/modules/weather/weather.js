const redis = require('../redis');
const forecastApi = require('../../clients/Forecast');
const { asyncForEach, toCelsius, formatTime } = require('../../utils');

redis.hmset(
  'cities',
  'Zurich', '47.376887,8.541694',
  'Londres', '51.507351,-0.127758',
  'Sydney', '-33.86882,151.209296',
  'Georgia', '32.165622,-82.900075',
  'Santiago', '-33.44889,-70.669265',
  'Auckland', '-36.84846,174.763332',
);

const weather = {
  handlerError(city, cities, error) {
    if (error.name === 'customError') {
      redis.hset(
        'api.errors', 
        Math.floor(Date.now() / 1000).toString(),
        JSON.stringify({city, coordinates: cities[city], message: error.message}),
      );
    } else {
      console.log('handlerError', {city, coordinates: cities[city], message: error.message});
    }
  },
  async getCitiesData() {
    let cities;
    let cityError;
    try {
      const response = {};
      cities = await redis.hgetall('cities');
      await asyncForEach(Object.keys(cities), async (city) => {
        cityError = city;
        const { 
          data: { currently: { temperature, time, summary }, timezone },
        } = await forecastApi.weather.get(cities[city]);
        response[city] = {
          temperature: {
            fahrenheit: temperature,
            celsius: toCelsius(temperature),
          },
          time: formatTime(time, timezone, 'HH:mm'),
        };
      })
      return response;
    } catch (error) {
      weather.handlerError(cityError, cities, error);
      return weather.getCitiesData();
    }
  }
}

module.exports = weather;