import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.triggerElement =
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div className="dropdown">
        <div className='dropdown-trigger' onClick={e => this.setState({ open: !open })}>
          Trigger Goes Here
        </div>
        <div className={`dropdown-content ${open ? 'show-dropdown' : ''}`}>
          <p className='dropdown-item'>Item 1</p>
        </div>
      </div>
    )
  }
}


// ALLOWED PROP TYPES
Dropdown.propTypes = {
  trigger: PropTypes.element,
  options: PropTypes.shape({
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]).isRequired,
    icon: PropTypes.element,
  }),
};


export default Dropdown;
