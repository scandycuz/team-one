export const RECIEVE_UPDATE_ACTION = 'RECIEVE_UPDATE_ACTION';

export const recieveUpdateTask = (id, taskStatus, points) => {
  return ({
    type: RECIEVE_UPDATE_ACTION,
    id,
    taskStatus,
    points,
  });
}
