import { combineReducers } from 'redux';

import widget from './reducers/widget'


export default function createReducer(asyncReducers) {
  return combineReducers({
    widget,
    ...asyncReducers
  });
}