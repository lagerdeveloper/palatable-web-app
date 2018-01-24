import React, { Component } from 'react';
import { Sidebar, Menu, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../Images/palatable_red_logo.svg';
import './Layout.css';
import './Drawer.css';

function isChildOfClass(target, parentClass) {
  //If node is root then we have reached root of tree
  if (target.id === 'root') {
    return false;
  }
  if (target.classList.contains(parentClass)) {
    return true;
  }
  return isChildOfClass(target.parentNode, parentClass);
}

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.bodyClose = this.bodyClose.bind(this);
    this.state = { open: props.hasOwnProperty('open') ? props.open : false };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.open) {
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.body.addEventListener('click', this.bodyClose);
    } else {
      document.body.style.backgroundColor = "white";
      document.body.removeEventListener('click', this.bodyClose);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('open')) {
      this.setState({ open: nextProps.open });
    }
  }

  bodyClose(e) {
    if (!isChildOfClass(e.target, 'drawer')) {
      this.setState({ open: false });
    }
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div className={`drawer ${open ? 'open' : ''}`}>
        <Link to='/'>Home</Link>
        <button onClick={this.close}>Close</button>
        <p>hello</p>
      </div>
    );
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
