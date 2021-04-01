import { ADD_TASK, COMPLETED, DEL_TASK } from "../action/ToDoActions";

export default todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { task: action.task }];

    default:
      return state;
  }
};
