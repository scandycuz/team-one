import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import SideBar from './SideBar/SideBar';
import DashboardContainer from './Dashboard/DashboardContainer';

const App = () => {
  return(
    <div className="app">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="dashboard-container">
        <DashboardContainer />
      </div>
    </div>
  );
}

export default App;
