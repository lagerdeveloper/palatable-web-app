import React, { Component } from 'react';
import { Sidebar, Menu, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../Images/palatable_red_logo.svg';
import './Layout.css';
import './Drawer.css';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.state = { open: props.hasOwnProperty('open') ? props.open : false };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('open')) {
      this.setState({ open: nextProps.open });
    }
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return [
      <div
        key={1}
        className={`main-content-overlay ${open ? 'show' : ''}`}
        onClick={this.close}
      />,
      <div key={2} className={`drawer ${open ? 'open' : ''}`}>
        <div className="drawer-menu">
          <Link to='/'>Home</Link>
          <button onClick={this.close}>Close</button>
          <p>hello</p>
        </div>
      </div>
    ];
  }
}
// const Drawer = (props) => {
//   const { toggleSideBar, sideBarVisible, activeMenuItem, handleMenuItemClick } = props;
//   return (
//     <Sidebar
//       as={Menu}
//       animation='overlay'
//       className="drawer"
//       size='huge'
//       visible={sideBarVisible}
//       vertical
//     >
//       <Menu.Item
//         className='removeIcon'
//         onClick={toggleSideBar}
//         style={{ height: 59.69 }}
//       >
//         <Icon name='remove' className='left' />
//         <Image src={logo} />
//       </Menu.Item>
//       <Menu.Item
//         as={Link}
//         to='/'
//         name='home'
//         active={activeMenuItem === 'home'}
//         onClick={handleMenuItemClick}
//       >
//         <Icon name='home' className='left' />
//         Home
//       </Menu.Item>
//       <Menu.Item
//         as={Link}
//         to='/cocktails'
//         name='cocktails'
//         active={activeMenuItem === 'cocktails'}
//         onClick={handleMenuItemClick}
//       >
//         <Icon name='cocktail' className="left" />
//         Cocktails
//       </Menu.Item>
//     </Sidebar>
//   );
// };

export default Drawer;
