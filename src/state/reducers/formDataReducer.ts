import { ActionType } from '../action-types';
import { Action } from '../actions';

const initialState = window.localStorage.getItem('email') || '';

const reducer = (state: string = initialState, action: Action): string => {
  switch (action.type) {
    case ActionType.UPDATE:
      window.localStorage.setItem('email', action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
