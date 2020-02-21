const { ddb } = require('./db');

const dbFunctions = {
  getItem: params => ddb.getItem(params).promise(),
  query: params => ddb.query(params).promise(),
  putItem: params => ddb.putItem(params).promise(),
  updateItem: params => ddb.updateItem(params).promise(),
  deleteItem: params => ddb.deleteItem(params).promise(),
  scan: params => ddb.scan(params).promise(),
};

module.exports = { dbFunctions };
