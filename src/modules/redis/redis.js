const Redis = require('ioredis')
const { redis } = require('../../config');

const redisClient = new Redis(process.env.REDIS_URL);

module.exports = redisClient;
