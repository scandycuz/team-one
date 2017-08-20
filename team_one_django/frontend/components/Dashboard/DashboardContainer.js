import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = ({ tasks, rewards, project, }) => {
  return {
    tasks: tasks.tasks,
    rewards: rewards.rewards,
    project: project.project,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default DashboardContainer;
