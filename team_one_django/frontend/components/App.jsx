import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';

const App = () => {
  return(
    
    <div className="app">
      <Header/>
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="dashboard-container">
        Dashboard
      </div>
    </div>
  );
}

export default App;