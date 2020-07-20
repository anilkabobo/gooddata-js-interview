export function updateActiveMonth(value) {
  return {
    type: 'UPDATE_ACTIVE_MONTH',
    data: parseInt(value)
  };
}

export function updateActiveYear(value) {
  return {
    type: 'UPDATE_ACTIVE_YEAR',
    data: parseInt(value)
  };
}