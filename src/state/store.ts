import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

function store() {
  return createStore(reducers, {}, applyMiddleware(thunk));
}

export default store;
