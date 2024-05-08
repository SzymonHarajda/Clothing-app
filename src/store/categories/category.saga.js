import {takeLatest,all,call,put} from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { feachCategoriesSuccess,feachCategoriesFailed } from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";


  
  export function* feachCategoriesAsync(){
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
        yield put(feachCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield put(feachCategoriesFailed(error));
      }
  }

  export function* onFeachCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FEACH_CATEGORIES_START, feachCategoriesAsync);
  }


  export function* categoriesSaga(){
    yield all([call(onFeachCategories)]);
  }