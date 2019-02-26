import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css'

import MessageContainer from './components/messageContainer'
import TextBox from './components/textbox'


import * as actions from '../../../../modules/actions/chat'

const mapStateToProps = (state) => ({ chat: state.chat })
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {

  componentDidMount() {
    this.props.openWebsocket()
  }

  render() {
    const { sendMessage, chat: { isLoading, websocket, messages, error } } = this.props
    return (
      <div className="conversation-container">
        <MessageContainer
          isLoading={isLoading}
          websocket={websocket}
          messages={messages}
          error={error}
        />
        <TextBox
          isLoading={isLoading}
          websocket={websocket}
          error={error}
          sendMessage={sendMessage}
        />
      </div>
    )
  }
}