const { putScore } = require('./putScore');
const { deleteScore } = require('./deleteScore');

const mutations = {
  putScore,
  deleteScore,
};

module.exports = { mutations }
