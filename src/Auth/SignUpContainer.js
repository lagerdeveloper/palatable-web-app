import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react';

import SignUpForm from './SignUpForm';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ username, email, password }) {
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

export default connect()(SignUpContainer);
