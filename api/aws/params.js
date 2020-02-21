
const generateDate = () => new Date().toISOString();

const SCORES_TABLE_NAME = 'Pong_Scores_v_1_0';

const params = {
  putScore: ({
    username,
    score,
  }) => ({
    TableName: SCORES_TABLE_NAME,
    Item: {
      username: { S: username },
      score: { N: score },
      createdAt: { S: generateDate() }
    }
  }),
  deleteScore: ({ username }) => {
    return {
      TableName: SCORES_TABLE_NAME,
      Key : {
        username: { S : username }
      },
      ReturnValues: 'ALL_OLD',
    }
  },
  scanScores: ({ limit, nextToken }) => ({
    TableName: SCORES_TABLE_NAME,
    ProjectionExpression: "username, score, createdAt",
    ExclusiveStartKey: nextToken || null, //Pagination - LastEvaluatedKeyPair
    Limit: limit || 10 //DataPerReq
  }),
};

module.exports = { params };
