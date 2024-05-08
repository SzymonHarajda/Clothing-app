import { CATEGORIES_ACTION_TYPES } from './categories.types';

import { createAction } from '../../utils/reducer/reducer.utils';

export const feachCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FEACH_CATEGORIES_START);
};

export const feachCategoriesSuccess = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.FEACH_CATEGORIES_SUCCESS, categoriesArray);
};

export const feachCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FEACH_CATEGORIES_FAILED, error);
};
