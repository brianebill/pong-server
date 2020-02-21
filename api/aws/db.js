const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const ddb = new AWS.DynamoDB({
  apiVersion: '2012-08-10',
  accessKeyId: 'xxx',
  secretAccessKey: 'xxx',
});

module.exports = { ddb };
