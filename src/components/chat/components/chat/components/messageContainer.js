import React from 'react'

import Message from './message'

export default ({ messages }) => (
  <div className="message-container">
    {
      messages.map((m, i) => <Message key={m.sender + i + m.message[0] } data={m} />)
    }
  </div>
)