import { CATEGORIES_ACTION_TYPES } from './categories.types';

import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const feachCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FEACH_CATEGORIES_START);
};

export const feachCategoriesSuccess = categoriesArray => {
  return createAction(
    CATEGORIES_ACTION_TYPES.FEACH_CATEGORIES_SUCCESS,
    categoriesArray,
  );
};

export const feachCategoriesFailed = error => {
  return createAction(CATEGORIES_ACTION_TYPES.FEACH_CATEGORIES_FAILED, error);
};

export const feachCategoriesAsync = () => async dispatch => {
  dispatch(feachCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    dispatch(feachCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(feachCategoriesFailed(error));
  }
};
