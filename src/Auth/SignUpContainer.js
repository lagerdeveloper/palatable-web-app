import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';

import SignUpForm from './SignUpForm';

import { authSuccess } from './actions';


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ username, email, password }) {
    // this.props.signUp(username, email, password);
    return axios.post('sign_up', {
      username,
      email,
      password,
    })
    .then(response => {
      const { jwt, login } = response.data;
      this.props.authSuccess(login, jwt);
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data.errors);
        throw new SubmissionError(error.response.data.errors);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        const errorObject = { _error: 'Error: No Response' };
        throw new SubmissionError(errorObject);
      } else {
        // Something happened in setting up the request that triggered an Error
        const errorObject = { _error: error.message };
        throw new SubmissionError(errorObject);
      }
    });
  }

  render() {
    //Redirect to home screen if the user is authenticated
    if (this.props.authenticated) {
      return <Redirect to='/' />;
    }
    return (
      <Grid textAlign='center' verticalAlign='middle' className='sign-up-container'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <SignUpForm onSubmit={this.handleSubmit} {...this.props} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, { authSuccess })(SignUpContainer);
