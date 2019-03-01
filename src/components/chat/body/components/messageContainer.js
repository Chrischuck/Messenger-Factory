import React from 'react'

import Message from './message'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.messageContainer = React.createRef()
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.messageContainer) {
      this.messageContainer.current.scrollTop = this.messageContainer.current.scrollHeight;
    }
  }

  render() {
    const { messages } = this.props
    return (
      <div ref={this.messageContainer} className="message-container">
        {
          messages.map((m, i) => <Message key={m.sender + i + m.message[0]} data={m} />)
        }
      </div>
    )
  }
}