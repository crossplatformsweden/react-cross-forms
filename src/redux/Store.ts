import { createStore } from 'redux';
import { RootReducer } from './Reducers';

/**
 * The main Redux store
 */
export const Store = createStore(RootReducer);
