// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
 // Importing your reducer

const store = configureStore({
  reducer: {
    userInfo: authReducer // Adding your reducer to the store
  }
});

export default store;
