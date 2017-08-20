import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const Header = (props) => {
    return(
      <div className="header">
        <h1 className='header-title'>{props.project.title}</h1>
        <Chip className='total-points'>
          <Avatar
            backgroundColor='#1A202A'
            color='#ffffff'
          >{props.project.points}</Avatar>
          Points
        </Chip>
      </div>
    );
}

export default Header;
