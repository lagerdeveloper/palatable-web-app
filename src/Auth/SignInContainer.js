import React, { Component } from 'react';
import { connect } from 'react-redux';
import { has } from 'lodash/object';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';

import SignInForm from './SignInForm';

import { authSuccess } from './actions';


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}


class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ login, password }) {
    // this.props.signIn(login, password);
    return axios.post('sign_in', {
      auth: {
        login,
        password,
      },
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
        if (typeof(error.response.data.errors) === 'object') {
          throw new SubmissionError(error.response.data.errors);
        }
        const errorObject = { _error: error.response.data.errors };
        throw new SubmissionError(errorObject)
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
    if (this.props.authenticated) {
      const redirectPath = has(this.props.location.state, 'from') ? this.props.location.state.from : '/';
      return <Redirect to={redirectPath} />;
    }
    return (
      <Grid textAlign='center' verticalAlign='middle' className='sign-in-container'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <SignInForm onSubmit={this.handleSubmit} {...this.props} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, { authSuccess })(SignInContainer);
