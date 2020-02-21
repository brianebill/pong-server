const score = require('./scores');

module.exports = {
  Query: {
    ...score.queries,
  },
  Mutation: {
    ...score.mutations,
  }
};
