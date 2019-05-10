const joi = require('@hapi/joi');

const { value: config } = joi.object().keys({
  PORT: joi.number(),
  API_SECRET: joi.string(),
  API_BASEURL: joi.string(),
  REDIS_URL: joi.string().required(),
}).validate(process.env, { stripUnknown: true })


module.exports = config;
