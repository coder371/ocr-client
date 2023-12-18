import {getDefaultMiddleware} from '@reduxjs/toolkit';
export const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
