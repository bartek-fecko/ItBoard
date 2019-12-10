import { StringParam } from 'use-query-params';

export enum OffersTypes {
   OffersRequestData = 'Offers/GET',
   OffersSetFilterParams = 'Offers/SETFILTERS',
   OffersRequestSucess = 'Offers/Sucess',
   OffersSetTotal = 'Offers/Total',
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
   type: OffersTypes.OffersSetTotal;
   totalOffers: number;
} | {
   type: OffersTypes.OffersRequestSucess;
   data: IOffer[];
} | {
   type: OffersTypes.OffersError;
   error: Error;
};

export type Seniority = 'junior' | 'mid' | 'senior';
export const offerProgrammingLanguages = ['javascript', 'C++', 'C#', 'python'];
export const offerSeniority = ['junior', 'mid', 'senior'];
export const offerCities = ['Kraków', 'Lublin', 'Warszawa', 'Gdańsk', 'Rzeszów'];

export interface IOffer {
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

export type UseQueryParamsConstructor = {
   [key in keyof OffersFilterParams]: typeof StringParam;
};

export interface OffersState {
   isLoading: boolean;
   data: IOffer[];
   filterParams: OffersFilterParams;
   totalOffers: number;
   error: Error | false;
}

export const initialState: OffersState = {
   data: [],
   error: false,
   filterParams: {},
   isLoading: false,
   totalOffers: 0,
};
