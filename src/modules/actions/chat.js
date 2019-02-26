export const OPEN_WEBSOCKET_PENDING = 'react-chat-messenger/chat/OPEN_WEBSOCKET_PENDING'
export const OPEN_WEBSOCKET_SUCCESS = 'react-chat-messenger/chat/OPEN_WEBSOCKET_SUCCESS'
export const OPEN_WEBSOCKET_FAILURE = 'react-chat-messenger/chat/OPEN_WEBSOCKET_FAILURE'

export const ADD_MESSAGE = 'react-chat-messenger/chat/ADD_MESSAGE'

export const CLOSE_WEBSOCKET_PENDING = 'react-chat-messenger/chat/CLOSE_WEBSOCKET_PENDING'
export const CLOSE_WEBSOCKET_SUCCESS = 'react-chat-messenger/chat/CLOSE_WEBSOCKET_SUCCESS'
export const CLOSE_WEBSOCKET_FAILURE = 'react-chat-messenger/chat/CLOSE_WEBSOCKET_FAILURE'

export const openWebsocketPending = () => ({ type: OPEN_WEBSOCKET_PENDING, payload: {} })
export const openWebsocketSuccess = (websocket) => ({ type: OPEN_WEBSOCKET_SUCCESS, payload: { websocket } })
export const openWebsocketFailure = (error) => ({ type: OPEN_WEBSOCKET_FAILURE, payload: { error } })

export const addMessage = (message) => ({ type: ADD_MESSAGE, payload: { message } })

export const closeWebsocketPending = () => ({ type: CLOSE_WEBSOCKET_PENDING, payload: {} })
export const closeWebsocketSuccess = () => ({ type: CLOSE_WEBSOCKET_SUCCESS, payload: {} })
export const closeWebsocketFailure = (error) => ({ type: CLOSE_WEBSOCKET_FAILURE, payload: { error } })

export function openWebsocket(payload) {
  return async function(dispatch) {
    try {
      dispatch(openWebsocketPending())

      const ws = new WebSocket(process.env.WEBSOCKET_URI)

      ws.onmessage = (event) => {
        dispatch(addMessage({ sender: 'INBOUND', message: event.data, timestamp: Date.now() }))
      }

      dispatch(openWebsocketSuccess(ws))

    } catch (error) {
      dispatch(openWebsocketFailure(error))
    }
  }
}

export function sendMessage(payload) {
  return async function(dispatch, getState) {
    try {
      dispatch(addMessage({ sender: 'OUTBOUND', message: payload.message, timestamp: Date.now() }))

      const { chat: { websocket } } = getState()

      websocket.send(payload.message)

    } catch (error) {
      console.log(error)
    }
  }
}