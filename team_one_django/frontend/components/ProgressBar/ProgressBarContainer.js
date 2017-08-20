import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';

const mapStateToProps = ({ rewards, project, }) => {
  return {
    project: project,
    rewards: rewards.rewards,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ProgressBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar)

export default ProgressBarContainer;
