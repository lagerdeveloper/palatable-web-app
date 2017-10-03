import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated) {
      this.props.history.push('/');
    }
  }

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.history.goBack();
    }
  }

  handleSubmit({ username, email, password }) {
    this.props.signUp(username, email, password);
  }

  render() {
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
