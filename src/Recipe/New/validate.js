const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Must provide recipe title.';
  }

  return errors;
}

export default validate;
