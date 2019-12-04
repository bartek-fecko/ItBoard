import store from '#/config/configureStore';
import '#/config/global.sass';
import { RootRouter } from '#/modules/RootRouting/RootRouting';
import * as React from 'react';
import { Provider } from 'react-redux';

export const App: React.FC = () => {
   return (
      <Provider store={store}>
            <RootRouter />
      </Provider>
   );
};
