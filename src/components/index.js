import React, { Fragment } from 'react'

import Launcher from './launcher'
import Chat from './chat'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChatOpen: !true
    }
  }
  
  render() {
    const { isChatOpen } = this.state
    console.log(window.frameElement)
    return (
      <Fragment>
        {
          isChatOpen && <Chat />
        }

        {
          !isChatOpen && <Launcher />
        }
      </Fragment>
    )
  }
}