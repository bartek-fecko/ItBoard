import history from '#/config/browserHistory';
import firebaseApp from '#/config/firebase';
import { Params, QueryBuilder } from '#/utils/queryBuilder';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { OffersFilterParams, OffersState, OffersTypes } from './constants';

const getAllOffers = async () => {
   const db = await firebaseApp.firestore();
   const querySnapshot = await db.collection('offers').get(); // request without params
   const allOffers = await querySnapshot.docs.map((doc) => doc.data());
   return allOffers;
};

const redirect = (params?: OffersFilterParams) => {
   if (!params) {
      return;
   }
   const queryBuilder = new QueryBuilder();
   const url = `/${queryBuilder.encode(params as Params)}`;
   history.push(url);
};

const getParams = (state) => (state.offers as OffersState).filterParams;

export function* getDataAsync(action) {
   try {
      yield put(Actions.loading(true));
      const params: OffersFilterParams = action.params
         ? action.params
         : yield select(getParams);

      const data = yield call(getAllOffers);
      if (data.error) {
         throw new Error('Server Errror.');
      }
      redirect(params);
      yield put(Actions.requestOffersSucess(data));
   } catch (e) {
      yield put(Actions.error(new Error(e)));
   }
}

export default function* rootSaga() {
   yield takeEvery(OffersTypes.OffersRequestData, getDataAsync);
}
