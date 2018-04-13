import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'react-icons/lib/md/close';
import './Layout.css';
import './Drawer.css';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.state = { open: props.open };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.setState({ open: nextProps.open });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.open !== this.state.open) {
      this.props.onChange(nextState.open);
    }
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <div
          className={`main-content-overlay ${open ? 'show' : ''}`}
          onClick={this.close}
        />
        <div className={`drawer ${open ? 'open' : ''}`}>
          <div className="drawer-content">
            <div className="drawer-header">
              <CloseIcon onClick={this.close} size={28} style={{ cursor: 'pointer', color: 'var(--secondary-color)' }}/>
            </div>
            <div className="drawer-items">
              {this.props.children}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Drawer;
