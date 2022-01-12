

export const countReducer = (state = 0, action = {}) => {
  const { type} = action;
  switch (type) {
    case "updateCount":
      // eslint-disable-next-line no-case-declarations
      const { count } = payload;
      return count;
    case "resetCount":
      return 0;
    case "ADD_COUNT":
      console.log("ADD_COUNT 被触发啦！");
      return state + 1;
    case "GET_COUNT_MOCK":
      const { newCount } = action;
      console.log("GET_COUNT_MOCK 被触发啦！");
      return newCount;
    default:
      return state;
  }
};

export default countReducer;
