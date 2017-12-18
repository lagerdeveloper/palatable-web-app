import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import RecipeInfo from './RecipeInfo';
import Ingredients from './Ingredients';
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
        return <RecipeInfo onSubmit={this.nextSection} />;
        break;
      case 2:
        return <Ingredients />;
        break;
      default:
        return <p>AN ERROR OCCURED</p>;
    }
  }

  render() {
    return (
      <div className='new-recipe-container'>
        { this.renderSection() }
      </div>
    );
  }
}

export default NewRecipeForm;
