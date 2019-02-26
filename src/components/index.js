import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Launcher from './launcher'
import Chat from './chat'


const mapStateToProps = (state) => ({ widget: state.widget })
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
  render() {
    const { widget: { isChatOpen } } = this.props
    
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