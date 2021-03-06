import React from 'react';
import { reduxForm, FieldArray, Field, clearFields } from 'redux-form';
import {
  Header,
  Form,
  Input,
  Button,
  Message,
} from 'semantic-ui-react';

import validate from './validate';

import './index.css';

const renderIngredient = ({ index, fields, input, meta: { invalid, touched } }) => (
  <Form.Field inline error={invalid}>
    <Input className='ingredient-input' error={touched && invalid} placeholder="Ingredient goes here!" {...input} />
    <Button
      type="button"
      circular
      className="close-btn"
      icon='close'
      onClick={(e) => {
        e.preventDefault();
        // Clear the field
        if (index === 0 && fields.length === 1) {
          fields.remove(index);
          fields.push();
        } else {
          fields.remove(index);
        }
      }}
    />
  </Form.Field>
);

const renderIngredients = ({ fields, meta: { error, submitFailed } }) => {
  //Used to add the first ingredient input field
  if (!fields.length) {
    fields.push();
  }
  return (
    <div className="ingredients-wrapper">
      { submitFailed && error && <Message negative content={error}/> }
      { fields.map((ingredient, index) => (
          <Field
            key={index}
            index={index}
            fields={fields}
            name={ingredient}
            component={renderIngredient}
          />
      ))}
      <Button
        type="button"
        icon='add'
        onClick={(e) => { e.preventDefault(); fields.push();}}
      />
    </div>
  );
};

const Ingredients = (props) => {
  return (
    <div className="ingredients-card">
      <Header as='h2' textAlign="center">Ingredients</Header>
      <Form onSubmit={props.handleSubmit}>
        <FieldArray name='ingredients' component={renderIngredients} />
        <Button type="button" onClick={props.prevSection}>Back</Button>
        <Button type="submit">Add Directions</Button>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'new_recipe',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Ingredients);
