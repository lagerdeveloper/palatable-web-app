import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../Routes';

import {
  Menu,
  Container,
  Sidebar,
  Icon,
} from 'semantic-ui-react';

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
    const { activeMenuItem, sideBarVisible } = this.state;
    return (
      <div>
        <Menu
          borderless
          fixed='top'
          size='large'
        >
          <Menu.Item
            icon={sideBarVisible ? 'cancel' : 'content'}
            onClick={this.toggleSideBar}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link}
              active={activeMenuItem === 'sign_up'}
              to='sign_up'
              name='sign_up'
              onClick={this.handleMenuItemClick}
            >
              Sign Up
            </Menu.Item>
            <Menu.Item
              as={Link}
              active={activeMenuItem === 'login'}
              to='/login'
              name='login'
              onClick={this.handleMenuItemClick}
            >
              Log In
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Sidebar
          as={Menu}
          animation='overlay'
          className="sidebar"
          width='thin'
          visible={sideBarVisible}
          vertical
        >
          <Menu.Item
            as={Link}
            to='/'
            name='home'
            active={activeMenuItem === 'home'}
            onClick={this.handleMenuItemClick}
          >
            <Icon name='home' className='left' />
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='/drinks'
            name='drinks'
            active={activeMenuItem === 'drinks'}
            onClick={this.handleMenuItemClick}
          >
            <Icon name='cocktail' className="left" />
            Drinks
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Container className="main">
            <Routes />
          </Container>
        </Sidebar.Pusher>
      </div>
    )
  }
}

export default Layout;