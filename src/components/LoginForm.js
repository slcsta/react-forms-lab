import React from "react";

// takes in one prop: handleLogin which is a function
// this function is called when the form is submitted
class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
      
      //username: e.target.value,
      //password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if(!this.state.username || !this.state.password) return 
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}  />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
