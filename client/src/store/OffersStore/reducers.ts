import * as C from './constants';

const offersReducer = (state: C.OffersState = C.initialState, action: C.OffersActions) => {
   switch (action.type) {
      case C.OffersTypes.OffersLoading:
         return {
            ...state,
            isLoading: action.isLoading,
         };
      case C.OffersTypes.OffersRequestSucess:
         return {
            ...state,
            data: action.data,
            isLoading: false,
         };
      case C.OffersTypes.OffersError:
         return {
            ...state,
            error: action.error,
            isLoading: false,
         };
      default:
         return state;
   }
};

export default offersReducer;
