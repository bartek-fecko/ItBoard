import * as C from './constants';

export function requestOffers(params?: C.OffersParams) {
   return {
      params,
      type: C.OffersTypes.OffersRequestData,
   } as C.OffersActions;
}

export function requestOffersSucess(data: C.Offer[]) {
   return {
      data,
      isLoading: false,
      type: C.OffersTypes.OffersRequestSucess,
   };
}

export function loading(isLoading: boolean) {
   return {
      isLoading,
      type: C.OffersTypes.OffersLoading,
   } as C.OffersActions;
}

export function error(isError: Error) {
   return {
      error: isError,
      type: C.OffersTypes.OffersError,
   } as C.OffersActions;
}
