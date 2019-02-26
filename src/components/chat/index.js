import React from 'react'

import './index.css'
import Header from './components/header'

export default class extends React.Component {
  render() {

    return (
      <div className="chat-container fadeInRight">
        <div className="inner-chat-container">
          <div className="chat-content">
            <Header />
          </div>
        </div>
      </div>
    )
  }
}