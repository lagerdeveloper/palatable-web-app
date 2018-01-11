import { isEmpty } from 'lodash/lang';
import { compact, union } from 'lodash/array';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Must provide recipe title.';
  }
  //Remove any falsey values from ingredients
  const ingredients = compact(values.ingredients);
  if (isEmpty(ingredients)) {
    errors.ingredients = { _error: 'Must add at least 1 ingredient' };
  } else {
    const ingredientsErrors = [];
    let repeatedIngredientIndices = [];
    values.ingredients.forEach((ingredient, index, ingredientsArray) => {
      repeatedIngredientIndices = findAllIndices(ingredientsArray, ingredient);
      if (repeatedIngredientIndices.length >= 2) {
        repeatedIngredientIndices.map(i => ingredientsErrors[i] = `Cannot use ${ingredient} more than once.`);
      }
    });
    if (ingredientsErrors.length) {
      errors.ingredients = ingredientsErrors;
    }
  }

  return errors;
}

//function that returns an array of indices for which item is found in array
const findAllIndices = (array, itemToFind) => {
  return array.reduce((indices, item, index) => (
    itemToFind === item ? indices.concat(index) : indices
  ), []);
}

export default validate;
