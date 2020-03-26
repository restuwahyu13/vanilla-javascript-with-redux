import {
  initState,
  NEXT_COUNTER,
  RESET_COUNTER,
  PREV_COUNTER
} from '../redux/action';

// REDUX REDUCER UPDATE STATE
function reduxReducer( state = initState, action ) {

  switch ( action.type ) {

    case NEXT_COUNTER:

      return {
        ...state, display: true, counter: state.counter + 1
      }

      case RESET_COUNTER:

        return {
          ...state, display: true, counter: 0
        }
        case PREV_COUNTER:

          return {
            ...state, display: true, counter: state.counter - 1
          }

          default:

            return state;
  }

}

export {
  reduxReducer
};