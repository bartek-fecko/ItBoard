import offers from '#/store/OffersStore/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   offers,
});

export default rootReducer;
