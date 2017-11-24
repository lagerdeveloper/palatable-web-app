import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import RecipeInfo from './RecipeInfo';
import './index.css';


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
        return <RecipeInfo />;
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
      <div className='new-recipe-container'>
        <Segment>
          { this.renderSection() }
        </Segment>
      </div>
    );
  }
}

export default NewRecipeForm;
