// ACTION STATE
const initState = {

  counter: 0,
  display: false
}

// ACTION TYPE
const NEXT_COUNTER = 'NEXT_COUNTER';
const RESET_COUNTER = 'RESET_COUNTER';
const PREV_COUNTER = 'PREV_COUNTER';

// ACTION CREATORS
function nextCounterAction() {

  return {
    type: NEXT_COUNTER
  };

}

// ACTION CREATORS
function resetCounterAction() {

  return {
    type: RESET_COUNTER
  };

}

// ACTION CREATORS
function prevCounterAction() {

  return {
    type: PREV_COUNTER
  };

}

export {
  initState,
  NEXT_COUNTER,
  RESET_COUNTER,
  PREV_COUNTER,
  nextCounterAction,
  resetCounterAction,
  prevCounterAction
};