import React, { Component } from 'react';
import NewRecipeForm from './NewRecipeForm';

class NewRecipeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <NewRecipeForm />;
  }
}

export default NewRecipeContainer;
