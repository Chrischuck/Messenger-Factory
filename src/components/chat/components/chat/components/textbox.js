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
  
	onChange = (event) => {		
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

  render() {
    const { rows } = this.state

    return (
      <div className="text-box-container">
        <textarea
          ref={this.textRef}
          className="text-box"
          placeholder="Say something!"
          name="message"
          onChange={this.onChange}
          rows={rows}
        /> 

        <div className="text-actions-container">
          hi
        </div>
      </div>
    )
  }
}