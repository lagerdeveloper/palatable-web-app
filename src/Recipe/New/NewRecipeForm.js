import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';
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
      case 2:
        return <Ingredients onSubmit={this.nextSection} prevSection={this.prevSection} />;
      default:
        return <p>AN ERROR OCCURED</p>;
    }
  }

  render() {
    return (
      <div className='container'>
        { this.renderSection() }
      </div>
    );
  }
}

export default NewRecipeForm;
