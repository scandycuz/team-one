import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import ProgressBar from './ProgressBar/ProgressBar';

const App = () => {
  return(
    
    <div className="app">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="dashboard-container">
        <Header />
        Dashboard
        <ProgressBar />
      </div>
    </div>
  );
}

export default App;