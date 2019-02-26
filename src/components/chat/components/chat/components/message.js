import React from 'react'

export default ({ data }) => (
  <div className={`message ${data.type === 'INBOUND' ? '' : 'message-outbound'}`}>
    {data.message}
  </div>
)