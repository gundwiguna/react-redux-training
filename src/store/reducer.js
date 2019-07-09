const initialState = {
  number: 1,
  numberCounter: {
    data: {
      asset: "Some datas"
    }
  }
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + 1 };
    case "DECREMENT":
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};

export { counter };
