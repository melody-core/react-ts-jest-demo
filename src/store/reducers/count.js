export const countReducer = (state=0, action={}) => {
    const { type, payload = {} } = action;
    switch (type) {
      case "updateCount":
        // eslint-disable-next-line no-case-declarations
        const { count } = payload;
        return count;
      case "resetCount":
        return  0;
      default:
        return state;
    }
  };


export default countReducer;