import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();

    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.addReward = this.addReward.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.updateTaskTitle = this.updateTaskTitle.bind(this);
    this.updateTaskDescription = this.updateTaskDescription.bind(this);
    this.updateTaskPoints = this.updateTaskPoints.bind(this);
  }

  defaultState() {
    return {
      rewardOpen: false,
      taskTitle: '',
      taskDescription: '',
      taskPoints: 0,
    };
  }

  taskRows() {
    return this.props.tasks.map((task) => {
      return (
        <TableRow key={task.title} selected={task.completed}>
          <TableRowColumn>{task.title}</TableRowColumn>
          <TableRowColumn>{task.description}</TableRowColumn>
          <TableRowColumn>{task.points}</TableRowColumn>
        </TableRow>
      );
    });
  } 

  rewardRows() {
    return this.props.rewards.map((reward) => {
      if (this.props.project.points >= reward.requiredPoints) {
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
  }  

  addReward() {
    this.setState({ rewardOpen: true });
  }

  handleClose() {
    this.setState({ rewardOpen: false });
  }

  handleTaskClick(rowIdx, cell, e) {
    if (e.target.type === 'checkbox') {
      const selectedTask = this.props.tasks[rowIdx];
      const taskId = selectedTask.id;
      const taskComplete = selectedTask.completed
      const points = selectedTask.points;
      this.props.recieveUpdateTask(taskId, !taskComplete, points);
    }
  }

  updateTaskTitle(e) {
    this.setState({ taskTitle: e.target.value });
  }

  updateTaskDescription(e) {
    this.setState({ taskDescription: e.target.value });
  }

  updateTaskPoints(e) {
    this.setState({ taskPoints: e.target.value });
  }

  submitTask() {
    const task = {
      title: this.state.taskTitle,
      description: this.state.taskDescription,
      points: parseInt(this.state.taskPoints),
    }

    this.props.addTask(task);
    this.setState(this.defaultState());
  }

  render() {
    return(
      <div className="dashboard">
        <Dialog
          title="Add a task!"
          modal={false}
          open={this.state.rewardOpen}
          onRequestClose={this.handleClose}
        >
          <div>
            <span className="points-label">Title:</span>
            <TextField 
              id="title"
              value={this.state.taskTitle}
              onChange={this.updateTaskTitle}
            />
          </div>
          <div>
            <span className="points-label">Description:</span>
            <TextField 
              id="description"
              value={this.state.taskDecription}
              onChange={this.updateTaskDescription}
            />
          </div>
          <div className="points-container">
            <span className="points-label">Points:</span>
            <input 
              type="number" 
              className="points" 
              value={this.state.taskPoints}
              onChange={this.updateTaskPoints}
            />
          </div>
          <RaisedButton 
            onClick={this.submitTask} 
            label="Add Task" 
            secondary={true}
          />
        </Dialog>
        <Tabs>
          <Tab label="Tasks" >
            <Table multiSelectable onCellClick={this.handleTaskClick}>
              <TableHeader displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>Title</TableHeaderColumn>
                  <TableHeaderColumn>Description</TableHeaderColumn>
                  <TableHeaderColumn>Points</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody deselectOnClickaway={false}>
                {this.taskRows()}
              </TableBody>
            </Table>
            <FlatButton
              onClick={this.addReward}
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
                {this.rewardRows()}
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
}
