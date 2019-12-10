import * as C from './constants';

export function requestOffers(params?: C.OffersFilterParams) {
   return {
      params,
      type: C.OffersTypes.OffersRequestData,
   } as C.OffersActions;
}

export function setFilterParams(filterParams: C.OffersFilterParams) {
   return {
      filterParams,
      type: C.OffersTypes.OffersSetFilterParams,
   } as C.OffersActions;
}

export function requestOffersSucess(data: C.IOffer[]) {
   return {
      data,
      isLoading: false,
      type: C.OffersTypes.OffersRequestSucess,
   } as C.OffersActions;
}

export function setOffersTotal(totalOffers: number) {
   return {
      totalOffers,
      type: C.OffersTypes.OffersSetTotal,
   } as C.OffersActions;
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
