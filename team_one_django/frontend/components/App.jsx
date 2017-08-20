import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import SideBar from './SideBar/SideBar';
import ProgressBar from './ProgressBar/ProgressBar';

const App = () => {
  return(
    <div className="app">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="dashboard-container">
        Dashboard
        <ProgressBar />
      </div>
    </div>
  );
}

export default App;