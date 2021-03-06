import * as C from './constants';

const offersReducer = (state: C.OffersState = C.initialState, action: C.OffersActions) => {
   switch (action.type) {
      case C.OffersTypes.OffersLoading:
         return {
            ...state,
            isLoading: action.isLoading,
         };
      case C.OffersTypes.OffersSetFilterParams:
         return {
            ...state,
            filterParams: {
               ...state.filterParams,
               ...action.filterParams,
            },
         };
      case C.OffersTypes.OffersRemoveFilterParams:
         return {
            ...state,
            filterParams: {},
         };
      case C.OffersTypes.OffersRequestSucess:
         return {
            ...state,
            data: action.data,
            isLoading: false,
         };
      case C.OffersTypes.OffersSetTotal:
         return {
            ...state,
            totalOffers: action.totalOffers,
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
