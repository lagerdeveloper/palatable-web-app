import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../Auth/actions';
import Layout from './Layout';

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

const LayoutContainer = (props) => {
  return <Layout {...props} />;
};

export default connect(mapStateToProps, { logout })(LayoutContainer);
