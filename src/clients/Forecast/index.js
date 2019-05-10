const axios = require('axios');
const endpoints = require('./endpoints');
const axiosRetry = require('axios-retry');
const { forecast: { url, secret } } = require('../../config');

const defaultParams = {};

const defaultConfig = {
  headers: { 'Content-Type': 'application/json' },
  baseURL: `${url}/${secret}`,
  timeout: 50000
};

function ForecastClient() {
  this.instance = axios.create(defaultConfig);
  axiosRetry(this.instance, { retries: 3 });
  
  Object.keys(endpoints).forEach((endpoint) => {
    this[endpoint] = endpoints[endpoint](this.instance, defaultParams);
  });
}

const forecastClient = new ForecastClient();

module.exports = forecastClient;
