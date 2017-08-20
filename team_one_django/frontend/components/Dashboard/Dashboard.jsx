import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Dashboard = (props) => {
  const taskRows = props.tasks.map((task) => {
    return (
      <TableRow key={task.title} selected={task.completed}>
        <TableRowColumn>{task.title}</TableRowColumn>
        <TableRowColumn>{task.description}</TableRowColumn>
        <TableRowColumn>{task.points}</TableRowColumn>
      </TableRow>
    );
  });

  const rewardRows = props.rewards.map((reward) => {
    if (props.project.points >= reward.requiredPoints) {
      return null;
    }
    return (
      <TableRow key={reward.title} selected>
        <TableRowColumn>{reward.title}</TableRowColumn>
        <TableRowColumn>{reward.description}</TableRowColumn>
        <TableRowColumn>{reward.requiredPoints}</TableRowColumn>
      </TableRow>
    );
  });

  const handleTaskClick = (rowIdx, cell, e) => {
    if (e.target.type === 'checkbox') {
      const selectedTask = props.tasks[rowIdx];
      const taskId = selectedTask.id;
      const taskComplete = selectedTask.completed
      const points = selectedTask.points;
      props.recieveUpdateTask(taskId, !taskComplete, points);
    }
  }

  return(
    <div className="dashboard">
      <Tabs>
        <Tab label="Tasks" >
          <Table multiSelectable onCellClick={handleTaskClick}>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
                <TableHeaderColumn>Points</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody deselectOnClickaway={false}>
              {taskRows}
            </TableBody>
          </Table>
          <FlatButton
            className="add-button"
            label="+ Add Task"
            secondary={true}
          />
        </Tab>
        <Tab label="Rewards" >
          <Table multiSelectable>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
                <TableHeaderColumn>Required Points</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {rewardRows}
            </TableBody>
          </Table>
          <FlatButton
            className="add-button"
            label="+ Add Reward"
            secondary={true}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Dashboard;
