import history from '#/config/browserHistory';
import firebaseApp from '#/config/firebase';
import { Params, QueryBuilder } from '#/utils/queryBuilder';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import { OffersFilterParams, OffersTypes } from './constants';

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

export function* getDataAsync(action) {
   try {
      yield put(Actions.loading(true));
      const data = yield call(getAllOffers);
      if (data.error) {
         throw new Error('Server Errror.');
      }
      redirect(action.params as OffersFilterParams);
      yield put(Actions.requestOffersSucess(data));
   } catch (e) {
      yield put(Actions.error(new Error(e)));
   }
}

export default function* rootSaga() {
   yield takeEvery(OffersTypes.OffersRequestData, getDataAsync);
}
