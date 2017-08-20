import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ tasks, rewards, project, }) => {
  return {
    tasks: tasks.tasks,
    rewards: rewards.rewards,
    project: project,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;
