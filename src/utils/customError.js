class customError extends Error {
  constructor() {
    super(); 
    this.name = 'customError';
    this.message = 'How unfortunate! The API Request Failed';
  }
}

module.exports = customError;