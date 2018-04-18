import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.state = {
      open: false,
      selected: undefined,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const { open } = nextState;
    if (open) {
      document.addEventListener('click', this.close);
    }
  }

  close() {
    document.removeEventListener('click', this.close);
    this.setState({ open: false });
  }


  toggle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  selectOption(option) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(option);
    }
    this.setState({ selected: option });
  }

  renderItem(option, i) {
    //Extract props out of each option
    const { onClick } = option;
    return (
      <div
        key={i}
        className="dropdown-item"
        onClick={() => this.selectOption(option)}
      >
        {option.label}
      </div>
    );
  }

  render() {
    const { open, selected } = this.state;
    const { options, placeholder } = this.props;
    return (
      <div className="dropdown">
        <div className='dropdown-trigger' onClick={this.toggle}>
          { selected && selected.label || placeholder || '' }
        </div>
        <div className={`dropdown-content ${open ? 'show-dropdown' : ''}`}>
          {
            options.map((option, i) => this.renderItem(option, i))
          }
        </div>
      </div>
    )
  }
}


// ALLOWED PROP TYPES
Dropdown.propTypes = {
  trigger: PropTypes.element,
  placeholder: PropTypes.string,
  select: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      icon: PropTypes.element,
      onClick: PropTypes.func,
    }).isRequired
  )
};


export default Dropdown;
