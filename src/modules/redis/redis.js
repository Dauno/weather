const Redis = require('ioredis')
const { redis } = require('../../config');

const redisClient = new Redis(redis);

module.exports = redisClient;
