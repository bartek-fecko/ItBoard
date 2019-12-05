import firebaseApp from '#/config/firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import * as C from './constants';

const getAllOffers = async () => {
      const db = await firebaseApp.firestore();
      const querySnapshot = await db.collection('offers').get();
      const allOffers = await querySnapshot.docs.map((doc) => doc.data());
      return allOffers;
};

export function* getDataAsync() {
   try {
      yield put(Actions.loading(true));
      const data = yield call(getAllOffers);
      if (data.error) {
         throw new Error('Server Errror.');
      }
      yield put(Actions.requestOffersSucess(data));
   } catch (e) {
      yield put(Actions.error(new Error(e)));
   }
}

export default function* rootSaga() {
   yield takeEvery(C.OffersTypes.OffersRequestData, getDataAsync);
}
