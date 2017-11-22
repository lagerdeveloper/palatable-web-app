import React, { Component } from 'react';
import NewRecipeForm from './NewRecipeForm';
import './index.css'

class NewRecipeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="new-recipe-container">
        <NewRecipeForm />
      </div>
    );
  }
}

export default NewRecipeContainer;
