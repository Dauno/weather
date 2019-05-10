const Redis = require('ioredis')
const { REDIS_URL } = require('../../config');

const redisClient = new Redis(REDIS_URL);

module.exports = redisClient;
