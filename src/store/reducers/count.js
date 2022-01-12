

export const countReducer = (state = 0, action = {}) => {
  const { type, newCount} = action;
  switch (type) {
    case "resetCount":
      return 0;
    case "ADD_COUNT":
      console.log("ADD_COUNT 被触发啦！");
      return state + 1;
    case "GET_COUNT_MOCK":
      
      console.log("GET_COUNT_MOCK 被触发啦！");
      return newCount;
    default:
      return state;
  }
};

export default countReducer;
