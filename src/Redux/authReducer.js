
// authReducer.js

import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  user: {}
};

// Create slice
const authSlice = createSlice({
  name: 'userInfo', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer functions
    login: (state, action) => {
      state.user = action.payload; // Update user information in the state
    }
  }
});

// Export action creators
export const { login } = authSlice.actions;

// Export reducer function
export default authSlice.reducer;
