export const ADD_TASK = "ADD_TASK";
export const COMPLETED = "COMPLETED";
export const DEL_TASK = "DEL_TASK";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const delTask = (taskId) => {
  return {
    type: DEL_TASK,
    payload: taskId,
  };
};

export const completeTask = (taskId) => {
  return {
    type: COMPLETED,
    payload: taskId,
  };
};
