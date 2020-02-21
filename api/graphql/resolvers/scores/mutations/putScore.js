const {
  dbFunctions,
  params,
  responseHandlers,
} = require('../../../../aws');

const { putItem } = dbFunctions;

const putScore = async (source, args, { datasources }, state) => {
  let response;
  const { username, score } = args;

  const generatedParams = params.putScore({
    username,
    score
  });

  const promise = putItem(generatedParams);
  await promise
  .then(() => {
    response = responseHandlers.scoreItem(generatedParams);
  })
  .catch(rejected => console.log(rejected));

  return response;
}

module.exports = { putScore };
