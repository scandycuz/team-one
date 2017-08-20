import merge from 'lodash/merge';
import { RECIEVE_UPDATE_ACTION, ADD_TASK } from '../actions/taskActions';

const nullState = {
  tasks: [
    {
      id: 1,
      title: 'Splines',
      description: 'Reticulate spline',
      points: 15,
      completed: false,
    },
    {
      id: 2,
      title: 'DB Params',
      description: 'Confirm database parameters',
      points: 10,
      completed: true,
    },
    {
      id: 3,
      title: 'Redux',
      description: 'Interpolate Redux Store',
      points: 25,
      completed: false,
    },
    {
      id: 4,
      title: 'Django',
      description: 'Transplace back-end proccesses',
      points: 15,
      completed: false,
    },
    {
      id: 5,
      title: 'Styling',
      description: 'Coordinate design sequencing',
      points: 20,
      completed: false,
    },
    {
      id: 6,
      title: 'Deploy',
      description: 'Deploy files to AWS',
      points: 25,
      completed: false,
    },
  ],
}

const TaskReducer = (state = nullState, action) => {
  Object.freeze(state);

  const updateTasks = (id, taskStatus) => {
    const updatedTasks = state.tasks.map((task) => {
      if (task.id === id) {
        task.completed = taskStatus;
        return task;
      } else {
        return task;
      }
    });
    return updatedTasks;
  }

  const id = action.id;
  const taskStatus = action.taskStatus;
  switch (action.type) {
    case RECIEVE_UPDATE_ACTION:
      const tasks =  updateTasks(id, taskStatus);
      return merge({}, tasks, state);
    case ADD_TASK:
      const updatedTasks = JSON.parse(JSON.stringify(state.tasks));
      updatedTasks.push(action.task);
      const newState = {
        tasks: updatedTasks
      }
      return newState;
    default:
      return state;
  }
}

export default TaskReducer;
