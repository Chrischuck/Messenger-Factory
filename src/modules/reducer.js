import { combineReducers } from 'redux';

import widget from './reducers/widget'
import chat from './reducers/chat'


export default function createReducer(asyncReducers) {
  return combineReducers({
    widget,
    chat,
    ...asyncReducers
  });
}