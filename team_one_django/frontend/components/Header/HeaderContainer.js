import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = ({ project, }) => {
  return {
    project: project,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer;
