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

export type Seniority = 'junior' | 'mid' | 'senior';

export interface Offer {
   company: string;
   employmentStatus: string;
   language: string;
   latitude: number;
   location: string;
   longitude: number;
   salary: number;
   seniority: Seniority;
   title: string;
   _id: string;
}

export interface OffersParams {
   language?: string;
   seniority?: Seniority;
   location?: string;
}

export interface OffersState {
   isLoading: boolean;
   data: Offer[];
   error: Error | false;
}

export const initialState: OffersState = {
   data: [],
   error: false,
   isLoading: false,
};
