import {
  OPEN_WEBSOCKET_PENDING,
  OPEN_WEBSOCKET_SUCCESS,
  OPEN_WEBSOCKET_FAILURE,
  CLOSE_WEBSOCKET_PENDING,
  CLOSE_WEBSOCKET_SUCCESS,
  CLOSE_WEBSOCKET_FAILURE,
  ADD_MESSAGE
} from '../actions/chat'


const initialState = {
  websocket: null,
  isLoading: true,
  messages: [],
  error: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OPEN_WEBSOCKET_PENDING:
      return { ...state, isLoading: true }
    case OPEN_WEBSOCKET_SUCCESS:
      return { ...state, isLoading: false, websocket: payload.websocket }
    case OPEN_WEBSOCKET_FAILURE:
      return { ...state, isLoading: false, error: payload.error } 
    case CLOSE_WEBSOCKET_PENDING:
      return { ...state, isLoading: true }
    case CLOSE_WEBSOCKET_SUCCESS:
      return { ...state, isLoading: false, websocket: null }
    case CLOSE_WEBSOCKET_FAILURE:
      return { ...state, isLoading: false, error: payload.error } 
    case ADD_MESSAGE:
      return { ...state, messages: [ ...state.messages, payload.message ] }
    default:
      return state;
  }
}