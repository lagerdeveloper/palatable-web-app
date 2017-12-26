import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';
import {
  Header,
  Form,
  Input,
  Button,
} from 'semantic-ui-react';

import './index.css';

const renderIngredient = ({ input, meta: { error, touched } }) => (
  <Input placeholder="Ingredient goes here!" {...input} />
);

const renderIngredients = ({ fields, meta: { error } }) => {
  //Used to add the first ingredient input field
  if (!fields.length) {
    fields.push();
  }
  return (
    <div className="ingredients-wrapper">
      { fields.map((ingredient, index) => {
        console.log(index);
        return (
          <div key={index} className="ingredient-input">
            <Field name={ingredient} component={renderIngredient} />
            { index === 0 ? undefined :
              <Button circular className="close-btn" icon='close' onClick={(e) => {
                  e.preventDefault();
                  fields.remove(index);
                }}
              />
            }
          </div>
        );
      })}
      <Button icon='add' onClick={(e) => { e.preventDefault(); fields.push();}} />
    </div>
  );
};

const Ingredients = (props) => {
  return (
    <div className="ingredients-card">
      <Header as='h2' textAlign="center">Ingredients</Header>
      <Form onSubmit={props.handleSubmit}>
        <FieldArray name='ingredients' component={renderIngredients} />
        <Button onClick={props.prevSection}>Back</Button>
        <Button type="submit">Add Directions</Button>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'new_recipe',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Ingredients);
