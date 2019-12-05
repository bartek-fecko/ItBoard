export enum OffersTypes {
   OffersRequestData = 'Offers/GET',
   OffersRequestSucess = 'Offers/Sucess',
   OffersLoading = 'Offers/Loading',
   OffersError = 'Offers/Error',
}

export type OffersActions = {
   type: OffersTypes.OffersLoading;
   isLoading: true;
} | {
   type: OffersTypes.OffersRequestData;
   // articlesPerPage: number;
} | {
   type: OffersTypes.OffersRequestSucess;
   data: Offer[];
} | {
   type: OffersTypes.OffersError;
   error: Error;
};

export interface Offer {
   company: string;
   employmentStatus: string;
   language: string;
   latitude: number;
   location: string;
   longitude: number;
   salary: number;
   seniority: string;
   title: string;
   _id: string;
}

export interface OfferState {
   isLoading: boolean;
   data: Offer[];
   error: Error | false;
}

export const initialState: OfferState = {
   data: [],
   error: false,
   isLoading: false,
};
