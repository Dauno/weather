const joi = require('@hapi/joi');

const { value: config } = joi.object().keys({
  PORT: joi.number().default(3000),
  INTERVAL: joi.number().min(1000).required(),
  REDIS_URL: joi.string().uri({ scheme: /rediss?/ }).required(),
  API_SECRET: joi.string().default('f49939c699d5d1e58a83b09d63f1eb93'),
  API_BASEURL: joi.string().uri({ scheme: /https?/ }).default('https://api.darksky.net/forecast'),
}).validate(process.env, { stripUnknown: true })


module.exports = config;
