import React from 'react';

const ProgressBar = (props) => {
  const getNextReward = () => {
    let nextReward = null;
    for(let i = 0; i < props.rewards.length; i++ ){
      const reward = props.rewards[i];
      if (reward.requiredPoints > props.project.points) {
        return reward;
      }
    }
  }
  const nextReward = getNextReward();

  const widthDecimal = (props.project.points % 50) / 50;
  const width = widthDecimal * 100;
  const style = {
    width: `${width}%`,
  }

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-box">
        <div style={style} className="progress-bar" />
        <div className="progress-bar-labels">
          <span>Progress to goal: <strong>{nextReward.title}</strong></span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
