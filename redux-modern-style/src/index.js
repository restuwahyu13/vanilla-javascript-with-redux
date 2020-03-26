// @ts-nocheck
import {
  store
} from './redux/store';
import {
  nextCounterAction,
  resetCounterAction,
  prevCounterAction
} from './redux/action';

const nextCounter = document.getElementById( 'nextCounter' );
const resetCounter = document.getElementById( 'resetCounter' );
const prevCounter = document.getElementById( 'prevCounter' );

nextCounter.addEventListener( 'click', ( e ) => {

  // SEND DATA TO STORE
  store.dispatch( nextCounterAction() );

} );

resetCounter.addEventListener( 'click', ( e ) => {

  // SEND DATA TO STORE
  store.dispatch( resetCounterAction() );

} );

prevCounter.addEventListener( 'click', ( e ) => {

  // SEND DATA TO STORE
  store.dispatch( prevCounterAction() );

} );


// RESULT DATA TO VIEW
store.subscribe( () => {

  const valueCounter = store.getState().counter;
  const displayValue = store.getState().display;

  if ( displayValue == true ) {

    if ( valueCounter < 0 ) {

      const displayText = document.getElementById( 'display-text' );
      displayText.style.display = 'none';
      displayText.style.transform = '1ms';

      alert( 'Oops..your value counter is infinity, please reset counter' );

    } else {

      const resultCounter = document.getElementById( 'counter' );
      resultCounter.textContent = valueCounter;

      const displayText = document.getElementById( 'display-text' );
      displayText.style.display = 'block';
      displayText.style.transform = '1ms';
    }
  }

} );