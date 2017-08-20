import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SideBar from './SideBar/SideBar';
import HeaderContainer from './Header/HeaderContainer';
import ProgressBarContainer from './ProgressBar/ProgressBarContainer';
import DashboardContainer from './Dashboard/DashboardContainer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    }

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({open: false});
  };

  componentWillReceiveProps(nextProps) {
    nextProps.rewards.forEach((reward) => {
      if (this.props.project.points < reward.requiredPoints &&
      nextProps.project.points >= reward.requiredPoints) {
        this.message = <h2>Unlocked {reward.title}!</h2>;
        this.description = <p>{reward.description}</p>;
        setTimeout(() => {
          this.setState({
            open: true,
          })
        }, 200);
      }
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Woohoo!"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return(
      <div className="app">
        <Dialog
          title="Nice!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.message}
          {this.description}
        </Dialog>
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="dashboard-container">
          <HeaderContainer />
          <ProgressBarContainer />
          <DashboardContainer />
        </div>
      </div>
    );
  }
}

export default App;
