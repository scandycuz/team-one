import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { recieveUpdateTask, addTask } from '../../actions/taskActions';

const mapStateToProps = ({ tasks, rewards, project, }) => {
  return {
    tasks: tasks.tasks,
    rewards: rewards.rewards,
    project: project,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    recieveUpdateTask: (id, taskStatus, points) => dispatch(recieveUpdateTask(id, taskStatus, points)),
    addTask: (task) => dispatch(addTask(task)),
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default DashboardContainer;
