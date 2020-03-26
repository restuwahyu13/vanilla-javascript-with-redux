import {
  initState,
  NEXT_COUNTER,
  RESET_COUNTER,
  PREV_COUNTER
} from '../redux/action';
import {
  createReducer
} from '@reduxjs/toolkit'

// REDUX REDUCER
const reduxReducer = createReducer( initState, {

  [ NEXT_COUNTER ]: ( state, payload ) => {

    state.counter = state.counter + 1;
    state.display = true;
    return state;
  },

  [ RESET_COUNTER ]: ( state, payload ) => {

    state.counter = 0;
    state.display = true;
    return state;
  },

  [ PREV_COUNTER ]: ( state, payload ) => {

    state.counter = state.counter - 1;
    state.display = true;
    return state;
  }

} );

export {
  reduxReducer
};