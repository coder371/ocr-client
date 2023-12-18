import {combineReducers} from '@reduxjs/toolkit';

import configReducer from './reducers/config';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';

const reducer = combineReducers({
  config: configReducer,
  cart: cartReducer,
  user: userReducer,
});

export default reducer;
