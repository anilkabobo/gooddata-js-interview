const initialState = {
  activeMonth: 0,
  activeYear: 2015
};

const charts = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_MONTH':
      return {
        ...state,
        activeMonth: action.data
      };
    case 'UPDATE_ACTIVE_YEAR':
      return {
        ...state,
        activeYear: action.data
      };
    default:
      return state;
  }
};

export default charts;
