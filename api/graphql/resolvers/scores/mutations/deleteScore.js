const {
  dbFunctions,
  params,
  responseHandlers,
} = require('../../../../aws');

const { deleteItem } = dbFunctions;

const deleteScore = async (source, args) => {
  let response;
  const { username } = args;

  const fetchParams = params.deleteScore({ username });

  const promise = deleteItem(fetchParams);
  await promise
  .then(fulfilled => {
    response = responseHandlers.scoreAttributes(fulfilled)
  })
  .catch(rejected => console.log(rejected))

  return response;
}

module.exports = { deleteScore };
