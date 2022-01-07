export const countReducer = (state=0, action={}) => {
    console.log('countReducer')
    const { type, payload = {} } = action;
    switch (type) {
      case "updateCount":
        const { count } = payload;
        return count;
      case "resetCount":
        return  0;
      default:
        return state;
    }
  };


export default countReducer;