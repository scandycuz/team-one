export const RECIEVE_UPDATE_ACTION = 'RECIEVE_UPDATE_ACTION';
export const ADD_TASK = 'ADD_TASK';

export const recieveUpdateTask = (id, taskStatus, points) => {
  return ({
    type: RECIEVE_UPDATE_ACTION,
    id,
    taskStatus,
    points,
  });
}

export const addTask = (task) => {
  return({
    type: ADD_TASK,
    task,
  })
}
