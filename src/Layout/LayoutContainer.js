import React from 'react';
import { connect } from 'react-redux';
import { destroy } from 'redux-form';
import { logout } from '../Auth/actions';
import Layout from './Layout';

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    login: state.auth.login,
  };
}

const LayoutContainer = (props) => {
  return <Layout {...props} />;
};

export default connect(mapStateToProps, { logout, destroy })(LayoutContainer);
