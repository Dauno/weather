const customError = require('../../../utils/customError');

module.exports = (client, defaultParams) => ({
  get: (coordinates) => {
    if (Math.random(0, 1) < 0.1) {
      return Promise.reject(new customError());
    }
    return client(`/${coordinates}`, {
      method: 'GET',
      params: {
        ...defaultParams,
      }
    });
  },
});
