import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

import offersSaga from '#/store/OffersStore/sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
   return createStore(
      rootReducer,
      composeWithDevTools(
         applyMiddleware(sagaMiddleware),
      ),
   );
}

const store = configureStore();

sagaMiddleware.run(offersSaga);

export default store;
