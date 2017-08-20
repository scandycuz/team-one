const nullState = {
  rewards: [
    {
      id: 1,
      title: 'Unreal Tournament',
      description: '1 hour Unreal Tournament break',
      requiredPoints: 20,
    },
    {
      id: 2,
      title: 'Taco Day',
      description: 'Order taco catering for the team',
      requiredPoints: 30,
    },
    {
      id: 3,
      title: 'Movie Night',
      description: 'The team goes to a movie over the weekend',
      requiredPoints: 55,
    },
  ],
}

const RewardReducer = (state = nullState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default RewardReducer;
