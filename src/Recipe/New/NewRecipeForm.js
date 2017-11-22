import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';


class NewRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.state = {
      section: 1,
    }
  }

  nextSection() {
    this.setState({ section: this.state.section + 1 });
  }

  prevSection() {
    this.setState({ section: this.state.section - 1 });
  }

  renderSection() {
    const { section } = this.state;
    switch(section) {
      case 1:
        return <p>Section 1</p>;
        break;
      case 2:
        return <p>Section 2</p>;
        break;
      default:
        return <p>AN ERROR OCCURED</p>;
    }
  }

  render() {
    return (
      <Segment>
        { this.renderSection() }
      </Segment>
    );
  }
}

export default NewRecipeForm;
