export const colorReducer = (state='red', action={}) => {
    const { type } = action;
    switch (type) {
      case "blue":
         return 'blue';
      case "red":
        return 'red';
      default:
  
        return state;
    }
  }
  
  export default colorReducer