import {Link} from 'react-router-dom';
import React from 'react';
import {withRouter} from 'react-router';
class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  update(field) {
      return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
    this.props.processForm(user);
  }

  render() {
    let link = <Link to ="/signup"> Sign Up</Link>
    if(this.props.formType === "Sign Up") {
      link = <Link to= "/login">Log In</Link>
    }

    const errors = this.props.errors.map( (er,idx) => {
      return (<ul key={idx}>er</ul>);
    });
    return (
        <div>
          <h3>{this.props.formType}</h3>
          <form onSubmit = {this.handleSubmit}>
            <label>Username
              <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}></input>
            </label>
            <br />
            <label>
              Password
              <input type="text"
                value={this.state.password}
                onChange={this.update('password')}></input>
            </label>
            <br />
            <input type="submit" value = {this.props.formType}></input>
          </form>
          {link}
        </div>
    );
  }

}

export default withRouter(SessionForm);
