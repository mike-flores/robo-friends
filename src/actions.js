import { CHANGE_SEARCH_FIELD, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED } from './constants';
//returns an object
export const setSearchField = text => {
   return {
      type: CHANGE_SEARCH_FIELD,
      payload: text // the data needed to be sent to the reducer
   };
};

export const getRobots = () => dispatch => {
   dispatch({ type: GET_ROBOTS_PENDING });
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: GET_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: GET_ROBOTS_FAILED, payload: error }));
};
