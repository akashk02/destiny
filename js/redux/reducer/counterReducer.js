import {
  INCREMENT,
  DECREMENT,
  FUCK_REDUX_STATE,
} from "../action/CounterActions";

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      }

      return state;

    case FUCK_REDUX_STATE:
      return {
        ...state,
        fuckedUp: "true",
      };

    default:
      return state;
  }
};

export default counter;
