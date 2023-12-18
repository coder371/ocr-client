import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const counterSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = {};
    },
    setUserDefaultAddress: (state, action) => {
      state.user.defaultAddress = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserData, logout, setUserDefaultAddress} = counterSlice.actions;

export default counterSlice.reducer;
