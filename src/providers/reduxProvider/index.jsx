import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SplashScreen} from '@screens/index';
import {store, persistor} from '@redux/persist'; // استيراد المتجر والمتجر المستدام

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
