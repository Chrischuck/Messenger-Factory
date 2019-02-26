import React from 'react'

import './index.css'
import Header from './components/header'
import Chat from './components/chat'

export default class extends React.Component {
  render() {

    return (
      <div className="chat-container fadeInRight">
        <div className="inner-chat-container">
          <div className="chat-content">
            <Header />
            <Chat />
          </div>
        </div>
      </div>
    )
  }
}