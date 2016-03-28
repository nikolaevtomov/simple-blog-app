'use strict';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise                     from 'redux-promise';
import ReduxThunk                       from 'redux-thunk';
import reducers                         from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  ReduxPromise,
  ReduxThunk
)(createStore);

export const Stores = createStoreWithMiddleware(reducers);
