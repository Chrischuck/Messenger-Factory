import React from 'react'

export default ({ data }) => {

  if (data.sender === 'INBOUND') {
    return (
      <div className="single-message-container message-inbound-container">
        {
          <div className="message-img-container">
            <img className="message-img" src="https://images.unsplash.com/photo-1551070325-3e574457a243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80" />
          </div>
        }
        <div className="message message-inbound">
          {data.message}
        </div>
      </div>
    )
  }

  return (
    <div className="single-message-container">
      <div className="message">
        {data.message}
      </div>
    </div>
  )

}