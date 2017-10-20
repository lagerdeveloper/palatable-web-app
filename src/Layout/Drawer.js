import React from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
        icon='remove'
        onClick={toggleSideBar}
        style={{ height: 45.69 }}
      />
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
        to='/drinks'
        name='drinks'
        active={activeMenuItem === 'drinks'}
        onClick={handleMenuItemClick}
      >
        <Icon name='cocktail' className="left" />
        Drinks
      </Menu.Item>
    </Sidebar>
  );
};

export default Drawer;
