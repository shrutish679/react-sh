
import React, { Component,} from "react";

class ForgotPassword extends Component{
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
          
          fields["New_password"] = "";
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
     if (!fields["New_password"]) {
            formIsValid = false;
            errors["New_password"] = "*Please enter your password.";
     }
          if (!fields["Confirm_password"]) {
            formIsValid = false;
            errors["Confirm_password"] = "*Please reenter your password.";
          }
          else if(fields.Confirm_password !== fields.New_password){
            formIsValid=false;
            errors["Confirm_password"] ="*password mismatch.";
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
      
        <h2 className="space"> ResetPassword </h2><br />
        <form 
        method="post"
        className="reg"
        name="userRegistrationForm "
        onSubmit={this.handleSubmit}>
         <div className="col-md-6 col-xs-12 form-group required">
           <label>UserName</label>
           </div>
           <div className="col-md-6 col-xs-12 second-div">
          <input name="username" placeholder="username"   value={this.state.fields.username}
          onChange={this.handleChange}/>
          <div className="errorMsg">{this.state.errors.username}</div>
          <br />
          </div>
          <div className="col-md-6 col-xs-12 form-group required">
                    <label>New_Password</label>
                    </div>
                    <div className="col-md-6 col-xs-12 second-div">         
          <input type="password" placeholder="password" name="New_password"  value={this.state.fields.newpassword}
          onChange={this.handleChange}/>
          <div className="errorMsg">{this.state.errors.New_password}</div></div>
          <br />
          <div className="col-md-12 col-xs-12 form-group required">
          <label>Confirm_Password</label>
          </div>
          <div className="col-md-12 col-xs-12 second-div"> 
          <input type="password" placeholder="password" name="Confirm_password" value={this.state.fields.Confirm_password}
          onChange={this.handleChange}/>
          <div className="errorMsg">{this.state.errors.Confirm_password}</div>
          </div><br />
          <div className="col-md-6 col-xs-12 second-div">
          <input type="submit"  className="button"value="save" />
          <br /></div>
          
        </form>
      </div>
      </div>
    );
  }
}

export default ForgotPassword;