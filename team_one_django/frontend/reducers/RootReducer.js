import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import TaskReducer from './TaskReducer';
import RewardReducer from './RewardReducer';
import ProjectReducer from './ProjectReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  tasks: TaskReducer,
  rewards: RewardReducer,
  project: ProjectReducer,
});

export default RootReducer;
