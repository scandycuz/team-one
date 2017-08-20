import React, { Component } from 'react';

class Header extends Component {
    render() {
        var projectTitle = 'Team One';
        return(
            <div className="header">
                <h1>{projectTitle}</h1>
            </div>
        );
    }
}

export default Header;