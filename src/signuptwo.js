import React, { Component, } from "react";
import { Link } from "react-router-dom";

class SignUpTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      //userType : "",
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
      //userType:e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["firstname"] = "";
      fields["lastname"]="";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      fields["Confirm_password"] = "";
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

    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your firstname.";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }


    if (!fields[""]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your lastname.";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }


    /*if (!fields["doorno"]) {
      formIsValid = false;
      errors["doorno"] = "*Please enter your doorno.";
    }
    if (!fields["street"]) {
      formIsValid = false;
      errors["street"] = "*Please enter your street.";
    }
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please enter your city.";
    }
   */
    




    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

     if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
     } 

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    if (!fields["Confirm_password"]) {
      formIsValid = false;
      errors["Confirm_password"] = "*Please reenter your password.";
    }
    else if (fields.Confirm_password !== fields.password) {
      formIsValid = false;
      errors["Confirm_password"] = "*password mismatch.";
    }

    /*if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }*/

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  //   // Validations ends here

  render() {
    return (
      <div className="container col-md-6 col-md-offset-3">
        <div id="main-registration-container">
          <div id="register">
            <h2>SignUp</h2>
            <form
              method="post"
              className="reg"
              name="userRegistrationForm "
              onSubmit={this.handleSubmit}
            >

              {/* username */}
              <div className="col-md-6 col-xs-12 second-div">
              <label>FirstName</label>
            
                <input
                  name="firstname"
                  placeholder="firstname"
                  value={this.state.fields.firstname}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.firstname}</div>
                <br /></div>


                <div className="col-md-6 col-xs-12 second-div">
                <label>LastName</label>
            
                <input
                  name="lastname"
                  placeholder="lastname"
                  value={this.state.fields.lastname}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.lastname}</div>
                <br /></div>

              {/* email */}
              <div className="col-md-6 col-xs-12 form-group required">
                <label>Email-id</label>
                <input
                  type="email"
                  name="emailid"
                  placeholder="email"
                  value={this.state.fields.emailid}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.emailid}</div>
                <br /></div>
              {/* password */}
              <div className="col-md-6 col-xs-12 form-group required">
                <label>Password</label>
              
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.password}</div>
                <br /></div>
              {/* retype password */}
              <div className="col-md-6 col-xs-12 form-group required">
                <label>Confirm_password</label>
           
                <input
                  type="password"
                  placeholder="re-type password"
                  name="Confirm_password"
                  value={this.state.fields.Confirm_password}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.Confirm_password}</div>
                <br /></div>
              <div className="col-md-12 col-xs-12 second-div">
                <input type="submit" className="button" value="signin" />
                <br /><br /></div>
              <div className="col-md-6 col-xs-12 second-div">
                <Link to="/login/">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUpTwo;
