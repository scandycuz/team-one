import React from 'react';

let myReuseableStylesheet = document.createElement('style');
document.head.appendChild(myReuseableStylesheet);
let styleSheet = myReuseableStylesheet.sheet;
let addKeyFrames = (name, frames) => {
  var str = name + "{" + frames + "}",
  pos = styleSheet.length;
  styleSheet.insertRule("@-webkit-keyframes " + str, pos);
  styleSheet.insertRule("@keyframes " + str, pos + 1);
};


export default class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    addKeyFrames(
      'growth',
      'from {width: 2%;}' +
      'to {width: 50%;}'
    );
  }

  update() {
    this.setState({ width: '75%', animation: 'none' });
  }

  update2() {
    this.setState({ width: '100%', animation: 'none' });
  }


  render() {
    return (
      <div className="progress-bar-container">
        <div style={this.state} className="progress-bar" />
        <button onClick={this.update.bind(this)}>update</button>
        <button onClick={this.update2.bind(this)}>update2</button>
      </div>
    );
  }
}