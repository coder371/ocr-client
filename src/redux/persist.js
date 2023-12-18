import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import storage from '@react-native-async-storage/async-storage';

import rootReducer from './store'; // استيراد ملف جذر المنشئ الخاص بك
// تكوين تكوين التخزين المُستدام
const persistConfig = {
  key: 'root', // يجب تحديد مفتاح فريد لتخزين البيانات
  storage, // استخدام حزمة التخزين المستوردة
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // تكوين المنشئ الخاص بك مع Redux Persist

// export const store = configureStore({
//   reducer: persistedReducer, // استخدام المنشئ الخاص بـ Redux Persist
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // تكوين المتجر المُستدام
