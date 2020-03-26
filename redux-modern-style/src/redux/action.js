import {
  createAction
} from '@reduxjs/toolkit'

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
const nextCounterAction = createAction( NEXT_COUNTER );
const resetCounterAction = createAction( RESET_COUNTER );
const prevCounterAction = createAction( PREV_COUNTER );

export {
  initState,
  NEXT_COUNTER,
  RESET_COUNTER,
  PREV_COUNTER,
  nextCounterAction,
  resetCounterAction,
  prevCounterAction
};