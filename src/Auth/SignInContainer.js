import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { Grid } from 'semantic-ui-react';

import SignInForm from './SignInForm';

import { signIn } from './actions';


function mapStateToProps(state) {
  return {
    fetching: state.auth.fetching,
    authenticated: state.auth.authenticated,
  };
}


class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ login, password }) {
    this.props.signIn(login, password);
  }

  render() {
    if (this.props.authenticated) {
      return <Redirect to='/' />;
    }
    return (
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100%' }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <SignInForm onSubmit={this.handleSubmit} {...this.props} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, { signIn })(SignInContainer);
