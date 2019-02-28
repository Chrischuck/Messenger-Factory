import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Launcher from './launcher'
import Chat from './chat'


const mapStateToProps = (state) => ({ widget: state.widget })
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
  constructor(props) {
    super(props)

    // @README
    // All process.env stuff should float away and become actual values
    // now how do we take this and build css from it....
    console.log(process.env.MESSENGER_STYLES)

    //console.log(window.location.search)

    this.state = {

    }
  }
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