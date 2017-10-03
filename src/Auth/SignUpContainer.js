import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { Grid } from 'semantic-ui-react';

import SignUpForm from './SignUpForm';

import { signUp } from './actions';


function mapStateToProps(state) {
  return {
    fetching: state.auth.fetching,
    authenticated: state.auth.authenticated,
  };
}


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ username, email, password }) {
    this.props.signUp(username, email, password);
  }

  render() {
    //Redirect to home screen if the user is authenticated
    if (this.props.authenticated) {
      return <Redirect to='/' />;
    }
    return (
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100%' }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <SignUpForm onSubmit={this.handleSubmit} {...this.props} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, { signUp })(SignUpContainer);
