import React from 'react'

import './index.css'
import Header from './header'
import Body from './body'

export default class extends React.Component {
  render() {

    return (
      <div className="chat-container fadeInRight">
        <div className="inner-chat-container">
          <div className="chat-content">
            <Header />
            <Body />
          </div>
        </div>
      </div>
    )
  }
}