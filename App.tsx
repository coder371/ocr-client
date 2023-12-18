import React from 'react';
import ReduxProvider from '@providers/reduxProvider';
import ApolloProvider from '@providers/apolloProvider';
import Router from '@router/index';
import StatusBarProvider from '@providers/statusbarProvider';

export default function App() {
  return (
    <ReduxProvider>
      <StatusBarProvider>
        <Router />
      </StatusBarProvider>
    </ReduxProvider>
  );
}
