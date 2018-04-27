import React from 'react';
import './TextArea.css';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.autoResize = this.autoResize.bind(this);
  }

  autoResize(e) {
    const { offset } = this.state;
    // must set height to auto in order to update the scrollHeight (handles shrink)
    this.textArea.style.height = 'auto';
    this.textArea.style.height = `${e.target.scrollHeight + offset}px`;
  }

  componentDidMount() {
    const { clientHeight, offsetHeight } = this.textArea;
    this.setState({ offset: offsetHeight - clientHeight });
  }


  render() {
    const { onKeyUp, ...rest } = this.props;
    return (
      <textarea
        ref={element => this.textArea = element}
        onKeyUp={this.autoResize}
        {...rest}
      />
    );
  }
}

export default TextArea;
