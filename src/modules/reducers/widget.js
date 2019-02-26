import { OPEN, CLOSE } from '../actions/widget'

const initialState = {
  isChatOpen: false
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OPEN:
      return { ...state, isChatOpen: true }
    case CLOSE:
      return { ...state, isChatOpen: false }
    default:
      return state;
  }
}