import { configureStore } from '@reduxjs/toolkit'
import {logger} from 'redux-logger';
import {reduxReducer} from '../redux/reducer';

const store = configureStore({reducer: reduxReducer, middleware: [logger]});
export {store};