import React, { Component } from 'react';

class Header extends Component {
    render() {
        var projectTitle = 'Team One';
        var pointsTotal = 25;
        return(
            <div className="header">
                <h1>{projectTitle}</h1>
                <p>Total Points: {pointsTotal}</p>
            </div>
        );
    }
}

export default Header;