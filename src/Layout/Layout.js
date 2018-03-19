import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from '../AppRoutes';
import logo from '../Images/palatable_red_logo.svg';
import DrawerIcon from 'react-icons/lib/md/menu';
import SearchIcon from 'react-icons/lib/md/search';

import {
  Menu,
  Container,
  Sidebar,
  Dropdown,
  Image,
  Popup,
  Icon,
} from 'semantic-ui-react';

import Drawer from './Drawer';
import './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.state = { drawerOpen: false };
  }

  openDrawer() {
    this.setState({ drawerOpen: true });
  }

  closeDrawer() {
    this.setState({ drawerOpen: false });
  }

  render() {
    return (
      <Fragment>
        <Drawer
          open={this.state.drawerOpen}
          onDrawerOpenChange={open => this.setState({ drawerOpen: open })}
        >
          <Link to='/' onClick={this.closeDrawer}>Home</Link>
          <Link to='/cocktails' onClick={this.closeDrawer}>Cocktails</Link>
          <Link to='/recipe_box' onClick={this.closeDrawer}>Recipe Box</Link>
        </Drawer>
        <div className="layout">
          <div className="header">
            <div className="drawer-icon">
              <DrawerIcon style={{ cursor: 'pointer' }} color='#676767' size={28} onClick={this.openDrawer} />
            </div>
            <div className="sub-menu">
              <SearchIcon
                style={{ cursor: 'pointer' }}
                color='#676767'
                size={28}
              />
              <div
                className='sign-in-btn'
                onClick={() => this.props.history.push('/sign_in')}
              >
                Sign in
              </div>
              <div
                className='sign-up-btn'
                onClick={() => this.props.history.push('/sign_up')}
              >
                Start Cooking
              </div>
            </div>
          </div>
          <div className="main">
            <AppRoutes />
          </div>
        </div>
      </Fragment>

    );
  }
}


export default Layout;
