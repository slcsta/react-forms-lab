import React from "react";

// a controlled form derives its input values from state
// this component takes one prop: maxChars, which is a number-the max characters a msg can have
class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }  
  
  handleChange = (e) => {
    this.setState({ 
      message: e.target.value
    })
  }
  
  // make this a controlled component by adding the attributes to the <input> element
  // its value should be saved in the component's state and should update on every change to the input
  // show the remaining characters in the component.
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <h4>Characters Left: {this.props.maxChars - this.state.message.length} </h4>

      </div>
    );
  }
}

export default TwitterMessage;
