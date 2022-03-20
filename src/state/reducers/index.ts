import { combineReducers } from 'redux';
import formDataReducer from './formDataReducer';

const reducers = combineReducers({
  email: formDataReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
