import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loaded: true,
  country: 'EG',
  currency: 'EGP',
  currencySymbol: '£E',
  language: 'AR',
  countryId: 'AR',
  countryTitle: 'مصر',
  slider: null,
  thereIsNotifications: 0,
  location: null,
};

export const counterSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLoaded: (state, action) => {
      state.loaded = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoaded, setLocation} = counterSlice.actions;

export default counterSlice.reducer;
