import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

		this.state = {
			message: '',
			rows: 1,
		};

    this.textRef = React.createRef()
  }

  onEnterPress = (event) => {
    if (event.key === 'Enter') {
      this.sendMessage()
    }
  }
  
	onChange = (event) => {		

    if (!event.target.value || event.target.value === '\n') {
      return
    }
    
		const previousRows = event.target.rows;
  	event.target.rows = 1
		
		const currentRows = ~~(event.target.scrollHeight / 24);
    
    if (currentRows === previousRows) {
    	event.target.rows = currentRows;
    }
		
    
  	this.setState({
    	[event.target.name]: event.target.value,
      rows: event.target.scrollHeight === 55 ? 1 : currentRows,
    });
  };
  
  sendMessage = (e) => {
    if (!this.state.message) {
      return
    }
    this.props.sendMessage({ message: this.state.message })
    this.setState({ message: '', rows: 1 })
  }

  render() {
    const { rows, message } = this.state

    return (
      <div className="text-box-container">
        <textarea
          value={message}
          ref={this.textRef}
          className="text-box"
          placeholder="Say something!"
          name="message"
          onChange={this.onChange}
          rows={rows}
          onKeyPress={this.onEnterPress}
        /> 

        <div className="text-actions-container">
          <a className="send-icon" style={{cursor: 'pointer'}} onClick={this.sendMessage}>
            <svg height='20px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
          </a>
        </div>
      </div>
    )
  }
}