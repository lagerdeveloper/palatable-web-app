import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Icon, Message } from 'semantic-ui-react';
import { capitalize } from 'lodash/string';
import validate from './validate';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Dropdown from '../../Components/Dropdown/Dropdown';

import './index.css';


const Name = ({ input, meta }) => {
  const { error, touched } = meta;
  return (
    <Input
      placeholder='Recipe Title'
      type='text'
      error={touched && error ? error : undefined}
      {...input}
    />
  );
};

const Description = ({ input, meta }) => (
  <Form.TextArea
    placeholder='Description'
    {...input}
  />
);

const Servings = ({ input, meta }) => {
  const { error, touched } = meta;
  return (
    <Input
      placeholder="Servings"
      type='text'
      error={touched && error ? error : undefined}
      {...input}
    />
  );
};

const CookTime = ({ input, meta }) => {
  const { error, touched } = meta;
  return (
    <Input
      placeholder="Cook Time (20 minutes)"
      type='text'
      error={touched && error ? error : undefined}
      {...input}
    />
  );
}

const RecipeType = ({ input, meta }) => {
  const recipeTypes = [
    'appetizer',
    'breakfast',
    'brunch',
    'cocktail',
    'dessert',
    'dinner',
    'lunch',
  ];
  return (
    // <Form.Field>
    //   <Dropdown
    //     onChange={(e, data) => input.onChange(data.value)}
    //     options={recipeTypes.map((type, i) => ({
    //       key: i,
    //       text: capitalize(type),
    //       value: type,
    //     }))}
    //     placeholder='Recipe Type'
    //     selection
    //     value={input.value}
    //   />
    // </Form.Field>
    <Dropdown
      placeholder='Recipe Type'
      options={recipeTypes.map((type, i) => ({
        label: capitalize(type),
        value: type,
      }))}
    />
  );
};


const RecipeInfo = (props) => {
  const { handleSubmit } = props;
  return (
    <div className='recipe-info-card'>
      <form onSubmit={handleSubmit}>
        <Field name='name' component={Name} />
        <Field name='servings' component={Servings} />
        <Field name='cook_time' component={CookTime} />
        <Field name='category' component={RecipeType} />
        <Field name='description' component={Description} />
        <Button type="submit">
          Add Ingredients
        </Button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'new_recipe',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(RecipeInfo);
