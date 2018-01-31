import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../Routes';
import logo from '../Images/palatable_red_logo.svg';
import DrawerIcon from 'react-icons/lib/md/menu';
import VerticalMenuIcon from 'react-icons/lib/md/more-vert';

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
        <Drawer open={this.state.drawerOpen}>
          <button onClick={this.closeDrawer}>Close Drawer</button>
          <Link to='/cocktails' onClick={this.closeDrawer}>Cocktails</Link>
          <p>hello</p>
        </Drawer>
        <div className="layout">
          <div className="header">
            <div className="drawer-icon">
              <DrawerIcon style={{ cursor: 'pointer' }} size={30} onClick={this.openDrawer} />
            </div>
            <div className="sub-menu">
              <VerticalMenuIcon style={{ cursor: 'pointer' }} size={30} />
            </div>
          </div>
          <Routes />
        </div>
      </Fragment>
    );
  }
}

// class Layout extends Component {
//   constructor(props) {
//     super(props);
//     this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
//     this.toggleSideBar = this.toggleSideBar.bind(this);
//     this.hideSideBar = this.hideSideBar.bind(this);
//     this.logout = this.logout.bind(this);
//     this.state = {
//       activeMenuItem: 'home',
//       sideBarVisible: false,
//     };
//   }
//
//   handleMenuItemClick(e, { name }) {
//     this.setState({ activeMenuItem: name, sideBarVisible: false });
//   }
//
//   toggleSideBar() {
//     this.setState({ sideBarVisible: !this.state.sideBarVisible });
//   }
//
//   hideSideBar() {
//     this.setState({ sideBarVisible: false });
//   }
//
//   logout() {
//     this.props.destroy('new_recipe');
//     this.props.logout();
//   }
//
//   render() {
//     const { authenticated, login } = this.props;
//     const { activeMenuItem, sideBarVisible } = this.state;
//     const authDropdownOptions = [
//       {
//         key: 'account',
//         text: 'Account',
//         icon: 'user circle',
//         as: Link,
//         to: '/account',
//         active: false,
//         selected: false,
//       },
//       {
//         key: 'sign-out',
//         text: 'Sign Out',
//         icon: 'sign out',
//         onClick: this.logout,
//         active: false,
//         selected: false,
//       },
//     ];
//     const authMenuItems = [
//       <Popup
//         trigger={
//           <Menu.Item
//             as={Link}
//             to='/recipes/new'
//             icon='add'
//           />
//         }
//         content='Add a recipe'
//         key={1}
//       />,
//       <Dropdown
//         key={2}
//         item
//         icon={null}
//         header={login}
//         trigger={<Icon name="user"/>}
//         options={authDropdownOptions}
//       />
//     ];
//     const noAuthMenuItems = [
//       <Menu.Item
//         as={Link}
//         key={1}
//         active={activeMenuItem === 'sign_up'}
//         to='sign_up'
//         name='sign_up'
//         onClick={this.handleMenuItemClick}
//       >
//         Sign Up
//       </Menu.Item>,
//       <Menu.Item
//         as={Link}
//         key={2}
//         active={activeMenuItem === 'sign_in'}
//         to='/sign_in'
//         name='sign_in'
//         onClick={this.handleMenuItemClick}
//       >
//         Sign In
//       </Menu.Item>
//     ];
//     const SubMenuItems = authenticated ? authMenuItems : noAuthMenuItems;
//     return (
//       <div>
//         <Menu
//           borderless
//           size='huge'
//         >
//           <Menu.Item
//             icon='content'
//             onClick={this.toggleSideBar}
//           />
//           <Menu.Item>
//             <Image src={logo} />
//           </Menu.Item>
//           <Menu.Menu position='right'>
//             {SubMenuItems}
//           </Menu.Menu>
//         </Menu>
//         <Drawer
//           activeMenuItem={activeMenuItem}
//           sideBarVisible={sideBarVisible}
//           handleMenuItemClick={this.handleMenuItemClick}
//           toggleSideBar={this.toggleSideBar}
//         />
//         <Sidebar.Pusher className="main" onClick={this.hideSideBar}>
//           <Routes />
//         </Sidebar.Pusher>
//       </div>
//     )
//   }
// }

export default Layout;
