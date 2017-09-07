import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Menu>
          <Menu.Item>
            Home
          </Menu.Item>
        </Menu>
        <Route path='/home' />
      </div>
    )
  }
}

export default Layout;
