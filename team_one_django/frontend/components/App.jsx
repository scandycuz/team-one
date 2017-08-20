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
<<<<<<< HEAD
        <ProgressBar />
=======
>>>>>>> a8b94fdc03c57535fc98e032f6d9ccbf01fa7fe3
      </div>
    </div>
  );
}

export default App;