const {
  dbFunctions,
  params,
  responseHandlers,
} = require('../../../../aws');

const { scan } = dbFunctions;

const scanScores = async (source, args) => {
  console.log('SCAN SCORES RESOLVER');
  let response;
  const { limit = 10, nextToken = undefined } = args;
  console.log(args, 'args');
  const fetchParams = params.scanScores({ limit, nextToken });
  console.log('fetchParams', fetchParams);
  const promise = scan(fetchParams);
  await promise
  .then(fulfilled => {
    const items = responseHandlers.scoreItems(fulfilled);
    response = items;
  })
  .catch(rejected => console.log('rejected', rejected));

  return response
};

module.exports = { scanScores };
