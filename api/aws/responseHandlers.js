const responseHandlers = {
  scoreItem: (data) => {
    try {
      const { Item } = data;
      return {
        username: Item.username.S,
        score: Item.score.N,
        createdAt: Item.createdAt.S,
      };
    } catch(e) {
      console.log(e);
      return 'Internal server error'
    }
  },
  scoreItems: (data) => {
    const { Items } = data;
    const items = Items.map(item => {
      try {
        return {
          username: item.username.S,
          score: item.score.N,
          createdAt: item.createdAt.S,
        };
      } catch(e) {
        console.log(e);
        return 'Internal server error'
      }
    });

    return { items: [...items] }
  },
  scoreAttributes: (data) => {
    try {
      const { Attributes } = data;
      return {
        username: Attributes.username.S,
        score: Attributes.score.N,
        createdAt: Attributes.createdAt.S,
      };
    } catch(e) {
      console.log(e);
      return 'Internal server error'
    }
  },
}

module.exports = { responseHandlers };
