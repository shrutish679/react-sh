import React, { Component,} from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
      
    });
  }
  

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      
      fields["password"] = "";
     
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  

  //   console.log(fields);
  //   alert("Form submitted");
  }

  //   validations starts here
    validateForm() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }
 if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }
       this.setState({
        errors: errors
      });
         return formIsValid;
  }
  //   // Validations ends here

  render() {
    return (
      <div className="container col-md-6 col-md-offset-3">
      <div id="login">
        <h2>Login </h2>
        <form
        method="post"
        className="reg"
        name="userRegistrationForm "
        onSubmit={this.handleSubmit}>
        
          <br />
          <div className="col-md-6 col-xs-12 form-group required">
          <label>Name</label>
          </div>
          <div className="col-md-6 col-xs-12 second-div">
          <input
            name="username"
            placeholder="username"
            value={this.state.fields.username}
            onChange={this.handleChange}
          />
          <div className="errorMsg">{this.state.errors.username}</div>
          </div>
          <br/>
          <div className="col-md-6 col-xs-12 form-group required">
          <label>Password</label>
            </div>
          <div className="col-md-12 col-xs-12 second-div">
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.fields.password}
            onChange={this.handleChange}
          />
          <div className="errorMsg">{this.state.errors.password}</div>
          <br/>
          </div>
          <div className="col-md-6 col-xs-12 second-div">
          <input type="submit"  className="button"value="login" /><br />
            </div>
          <br />
          < Link to="/reset/" className="form__link link--right">Forgot password ?</Link>&nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/register/" className="form__link link--left">Sign up</Link>
          
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
