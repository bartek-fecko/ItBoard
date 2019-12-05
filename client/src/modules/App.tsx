import store from '#/config/configureStore';
import firebase from '#/config/firebase';
import '#/config/global.sass';
import { RootRouter } from '#/modules/RootRouting/RootRouting';
import * as React from 'react';
import { Provider } from 'react-redux';

// tslint:disable-next-line: no-unused-expression
firebase;

export const App: React.FC = () => {
   return (
      <Provider store={store}>
         <RootRouter />
      </Provider>
   );
};
