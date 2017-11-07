import React from 'react';
import { Sidebar, Menu, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../Images/palatable_red_logo.svg';
import './Layout.css';

const Drawer = (props) => {
  const { toggleSideBar, sideBarVisible, activeMenuItem, handleMenuItemClick } = props;
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      className="drawer"
      size='huge'
      visible={sideBarVisible}
      vertical
    >
      <Menu.Item
        className='removeIcon'
        onClick={toggleSideBar}
        style={{ height: 59.69 }}
      >
        <Icon name='remove' className='left' />
        <Image src={logo} />
      </Menu.Item>
      <Menu.Item
        as={Link}
        to='/'
        name='home'
        active={activeMenuItem === 'home'}
        onClick={handleMenuItemClick}
      >
        <Icon name='home' className='left' />
        Home
      </Menu.Item>
      <Menu.Item
        as={Link}
        to='/cocktails'
        name='cocktails'
        active={activeMenuItem === 'cocktails'}
        onClick={handleMenuItemClick}
      >
        <Icon name='cocktail' className="left" />
        Cocktails
      </Menu.Item>
    </Sidebar>
  );
};

export default Drawer;
