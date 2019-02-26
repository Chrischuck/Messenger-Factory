export const OPEN  = 'react-chat-messenger/widget/OPEN'
export const CLOSE = 'react-chat-messenger/widget/CLOSE'

export const setWidgetOpened = () => ({ type: OPEN, payload: {} })
export const setWidgetClosed = () => ({ type: CLOSE, payload: {} })

export function openWidget(payload) {
  return async function(dispatch) {
    top.postMessage('OPEN', '*');
    dispatch(setWidgetOpened())
  }
}

export function closeWidget(payload) {
  return async function(dispatch) {
    top.postMessage('CLOSE', '*');
    dispatch(setWidgetClosed())
  }
}



