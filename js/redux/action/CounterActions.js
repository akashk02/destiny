export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FUCK_REDUX_STATE = "FUCK_REDUX_STATE";

export const incrementCounter = () => {
  return { type: INCREMENT };
};
export const decrementCounter = () => {
  return { type: DECREMENT };
};
export const fuckReduxState = () => {
  return { type: FUCK_REDUX_STATE };
};
