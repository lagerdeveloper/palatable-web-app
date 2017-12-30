import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Dropdown, Header, Button, Icon, Message } from 'semantic-ui-react';
import { capitalize } from 'lodash/string';
import { isUndefined } from 'lodash/lang';
import validate from './validate';

import './index.css';


const Name = ({ input, meta }) => (
  <Form.Field error={meta.touched && !isUndefined(meta.error)}>
    <Input
      placeholder='Recipe Title'
      {...input}
    />
    { meta.touched && meta.error && <Message negative attached='bottom'>{meta.error}</Message> }
  </Form.Field>
);

const Description = ({ input, meta }) => (
  <Form.TextArea
    autoHeight
    placeholder='Description'
    {...input}
  />
);

const Servings = ({ input, meta }) => (
  <Form.Field>
    <Input
      placeholder="Servings"
      {...input}
    />
  </Form.Field>
);

const CookTime = ({ input, meta }) => (
  <Form.Field>
    <Input
      placeholder="Cook Time (20 minutes)"
      {...input}
    />
  </Form.Field>
);

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
    <Form.Field>
      <Dropdown
        onChange={(e, data) => input.onChange(data.value)}
        options={recipeTypes.map((type, i) => ({
          key: i,
          text: capitalize(type),
          value: type,
        }))}
        placeholder='Recipe Type'
        selection
        value={input.value}
      />
    </Form.Field>
  );
};


const RecipeInfo = (props) => {
  const { handleSubmit } = props;
  return (
    <div className='recipe-info-card'>
      <Header as='h2' textAlign='center'>New Recipe</Header>
      <Form onSubmit={handleSubmit}>
        <Field name='name' component={Name} />
        <Form.Group widths='equal'>
          <Field name='servings' component={Servings} />
          <Field name='cook_time' component={CookTime} />
          <Field name='category' component={RecipeType} />
        </Form.Group>
        <Field name='description' component={Description} />
        <Button primary icon fluid labelPosition="right" type="submit">
          Add Ingredients
          <Icon name="right arrow" />
        </Button>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'new_recipe',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(RecipeInfo);
