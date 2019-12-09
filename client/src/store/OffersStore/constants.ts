export enum OffersTypes {
   OffersRequestData = 'Offers/GET',
   OffersSetFilterParams = 'Offers/SETFILTERS',
   OffersRequestSucess = 'Offers/Sucess',
   OffersLoading = 'Offers/Loading',
   OffersError = 'Offers/Error',
}

export type OffersActions = {
   type: OffersTypes.OffersLoading;
   isLoading: true;
} | {
   type: OffersTypes.OffersSetFilterParams;
   filterParams: OffersFilterParams;
} | {
   type: OffersTypes.OffersRequestData;
} | {
   type: OffersTypes.OffersRequestSucess;
   data: Offer[];
} | {
   type: OffersTypes.OffersError;
   error: Error;
};

export type Seniority = 'junior' | 'mid' | 'senior';
export const programmingLanguage = ['javascript', 'C++', 'C#', 'python'];
export const seniority = ['junior', 'mid', 'senior'];
export const cities = [];

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

export interface OffersFilterParams {
   language?: string;
   seniority?: Seniority;
   location?: string;
   text?: string;
}

export interface OffersState {
   isLoading: boolean;
   data: Offer[];
   filterParams: OffersFilterParams;
   error: Error | false;
}

export const initialState: OffersState = {
   data: [],
   error: false,
   filterParams: {},
   isLoading: false,
};
