import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    increaseCartItemQuantity: (state, action) => {
      state.cart.forEach(item => {
        if (item._id === action.payload._id) {
          item.quantity = item.quantity + 1;
          const additionsPrice = item.additions.reduce(
            (acc, obj) => acc + obj.price,
            0,
          );
          item.total =
            item.quantity *
            (+(item.size ? item.size.price : item.price) + additionsPrice);
        }
      });
    },
    decreaseCartItemQuantity: (state, action) => {
      state.cart.forEach(item => {
        if (item._id === action.payload._id) {
          item.quantity = item.quantity - 1;
          const additionsPrice = item.additions.reduce(
            (acc, obj) => acc + obj.price,
            0,
          );
          item.total =
            item.quantity *
            (+(item.size ? item.size.price : item.price) + additionsPrice);
        }
      });
    },
    deleteItemFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload._id);
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  deleteItemFromCart,
  clearCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = counterSlice.actions;

export default counterSlice.reducer;
