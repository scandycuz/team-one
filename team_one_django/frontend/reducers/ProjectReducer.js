import merge from 'lodash/merge';
import { RECIEVE_UPDATE_ACTION } from '../actions/taskActions';

const nullState = {
  title: 'Company Product',
  points: 10,
}

const ProjectReducer = (state = nullState, action) => {
  Object.freeze(state);

  const taskStatus = action.taskStatus;
  const taskPoints = action.points;
  switch (action.type) {
    case RECIEVE_UPDATE_ACTION:
      let points = state.points;
      if (taskStatus) {
        points += taskPoints;
      } else {
        points -= taskPoints;
      }
      const updatedState = merge({}, state, { points });
      return updatedState;
    default:
      return state;
  }
}

export default ProjectReducer;
