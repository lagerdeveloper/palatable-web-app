import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../Routes';

import {
  Menu,
  Container,
  Sidebar,
  Dropdown,
} from 'semantic-ui-react';

import Drawer from './Drawer';
import './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.state = {
      activeMenuItem: 'home',
      sideBarVisible: false,
    };
  }

  handleMenuItemClick(e, { name }) {
    this.setState({ activeMenuItem: name, sideBarVisible: false });
  }

  toggleSideBar() {
    this.setState({ sideBarVisible: !this.state.sideBarVisible });
  }

  render() {
    const { logout, authenticated } = this.props;
    const { activeMenuItem, sideBarVisible } = this.state;
    const authDropdownOptions = [
      { key: 'account', text: 'Account' },
      { key: 'sign-out', text: 'Sign Out', onClick: () => logout() },
    ];
    const authMenuItems = [
      <Menu.Item icon='plus' key={1} />,
      <Dropdown
        key={2}
        item
        icon={null}
        trigger={<span>Alex Lagerman</span>}
        options={authDropdownOptions}
      />
    ];
    const noAuthMenuItems = [
      <Menu.Item
        as={Link}
        key={1}
        active={activeMenuItem === 'sign_up'}
        to='sign_up'
        name='sign_up'
        onClick={this.handleMenuItemClick}
      >
        Sign Up
      </Menu.Item>,
      <Menu.Item
        as={Link}
        key={2}
        active={activeMenuItem === 'sign_in'}
        to='/sign_in'
        name='sign_in'
        onClick={this.handleMenuItemClick}
      >
        Sign In
      </Menu.Item>
    ];
    const SubMenuItems = authenticated ? authMenuItems : noAuthMenuItems;
    return (
      <div>
        <Menu
          borderless
          fixed='top'
          size='huge'
        >
          <Menu.Item
            icon='content'
            onClick={this.toggleSideBar}
          />
          <Menu.Menu position='right'>
            {SubMenuItems}
          </Menu.Menu>
        </Menu>
        <Drawer
          activeMenuItem={activeMenuItem}
          sideBarVisible={sideBarVisible}
          handleMenuItemClick={this.handleMenuItemClick}
          toggleSideBar={this.toggleSideBar}
        />
        <Sidebar.Pusher dimmed className="main">
          <Container className="main">
            <Routes />
          </Container>
        </Sidebar.Pusher>
      </div>
    )
  }
}

export default Layout;
