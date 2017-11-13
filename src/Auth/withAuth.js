import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default (ComponentToAuthorize) => {
  return connect(mapStateToProps)(
    class AuthorizedComponent extends Component {
      render() {
        if (!this.props.authenticated) {
          return <Redirect to='/' />;
        }
        return <ComponentToAuthorize {...this.props} />;
      }
    }
  );
}
