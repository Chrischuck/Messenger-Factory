import React from 'react'

import './index.css'
import Header from './header'

const Body = React.lazy(() => import('./body'));
import BodyLoader from './body/loading'


export default class extends React.Component {
  render() {

    return (
      <div className="chat-container fadeInRight">
        <div className="inner-chat-container">
          <div className="chat-content">
            <Header />
            <React.Suspense fallback={BodyLoader()}>
              <Body />
            </React.Suspense>
          </div>
        </div>
      </div>
    )
  }
}