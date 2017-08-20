const nullState = {
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'Lorem Ipsum',
      points: 15,
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Lorem Ipsum',
      points: 15,
      completed: true,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Lorem Ipsum',
      points: 15,
      completed: false,
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Lorem Ipsum',
      points: 15,
      completed: false,
    },
    {
      id: 5,
      title: 'Task 5',
      description: 'Lorem Ipsum',
      points: 15,
      completed: false,
    },
  ],
}

const TaskReducer = (state = nullState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default TaskReducer;
