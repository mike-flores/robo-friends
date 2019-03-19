import { CHANGE_SEARCH_FIELD } from './constants';
//returns an object
export const setSearchField = text => {
   return {
      type: CHANGE_SEARCH_FIELD,
      payload: text // the data needed to be sent to the reducer
   };
};
