import React from 'react';
import { reduxForm, FieldArray, Field, clearFields } from 'redux-form';
import {
  Header,
  Form,
  Message,
} from 'semantic-ui-react';

import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import validate from './validate';

import './index.css';

const renderIngredient = ({ index, fields, input, meta: { invalid, touched } }) => (
  <div className='ingredient'>
    <Input
      error={touched && invalid ? invalid : undefined}
      placeholder="Ingredient goes here!"
      {...input}
    />
    <Button
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
    >Remove</Button>
  </div>
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
      >Add</Button>
    </div>
  );
};

const Ingredients = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FieldArray name='ingredients' component={renderIngredients} />
      <Button type="button" onClick={props.prevSection}>Back</Button>
      <Button type="submit">Add Directions</Button>
    </form>
  );
};

export default reduxForm({
  form: 'new_recipe',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Ingredients);
