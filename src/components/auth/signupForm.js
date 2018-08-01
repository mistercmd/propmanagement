import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle'
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';



class SignupForm extends Component {
   render() {
      return (
        <form className="sign-in-form">
            <FormTitle className="sign-in-form__title" text="Login"/>
            <Field 
            className="sign-in-form__email" 
            placeholder="Enter Email"
            name="Email" 
            type="email"
            title="Email"
            component={FormInput} 
            />
            <Field 
            className="sign-in-form__password" 
            placeholder="Enter Password"
            name="password" 
            type="password"
            title="Password"
            component={FormInput} 
            />
            <Field 
            className="sign-in-form__login" 
            name="Login" 
            type="submit"
            title="login"
            component={FormButton} 
            />
            <div className="sign-in-form__text-links">
                <TextLink to="/forgot" text="Forgot Password"/>
                <TextLink to="/signup" text="Not a member? Register here"/>
            </div>
        </form>
      )
   }
}

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm);

export default SignupForm;