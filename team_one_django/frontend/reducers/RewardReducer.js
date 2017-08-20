const nullState = {
  rewards: [
    {
      id: 1,
      title: 'Unreal Tournament',
      description: 'Everyone take a 1 hour break to play Unreal Tournament over the local network',
      requiredPoints: 50,
    },
    {
      id: 2,
      title: 'Taco Day',
      description: 'Order tacos to the office',
      requiredPoints: 100,
    },
    {
      id: 3,
      title: 'Movie Night',
      description: 'The team goes to a movie over the weekend',
      requiredPoints: 150,
    },
    {
      id: 4,
      title: 'Team dinner at Kokkari',
      description: 'Team dinner at Kokkari in SF',
      requiredPoints: 200,
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
