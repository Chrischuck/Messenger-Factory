import React from 'react'

export default ({ data }) => (
  <div className={`message-container ${data.sender === 'INBOUND' ? 'message-inbound-container' : ''}`}>
    <div className={`message ${data.sender === 'INBOUND' ? 'message-inbound' : ''}`}>
      {data.message}
    </div>
  </div>
)