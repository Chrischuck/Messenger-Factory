import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css'

import MessageContainer from './components/messageContainer'
import TextBox from './components/textbox'

export default class extends React.Component {

  render() {

    return (
      <div className="conversation-container">
        <MessageContainer />
        <TextBox />
      </div>
    )
  }
}