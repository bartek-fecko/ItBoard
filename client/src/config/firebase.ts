// tslint:disable: object-literal-sort-keys
import * as firebaseLib from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

export const firebaseApp = firebaseLib.initializeApp({
   apiKey: 'AIzaSyARvYLJkhR9PgCNr7L8N7XPDZvQglQ6inI',
   authDomain: 'itboard-590c5.firebaseapp.com',
   databaseURL: 'https://itboard-590c5.firebaseio.com',
   projectId: 'itboard-590c5',
   storageBucket: 'itboard-590c5.appspot.com',
   messagingSenderId: '478023873855',
   appId: '1:478023873855:web:6e48101280a14c18bacf8a',
   measurementId: 'G-7PCE3E3L2Z',
});

export default firebaseApp;
