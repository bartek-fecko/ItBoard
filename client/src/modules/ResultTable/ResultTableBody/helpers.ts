import { IOffer, OffersFilterParams, UseQueryParamsConstructor } from '#/store/OffersStore/constants';

export const filterByQueries = (queries: OffersFilterParams, offers: IOffer[]): IOffer[] => {
   const queriesArray = creteFilteredQueriesArray(queries);
   return offers.filter((offer) => {
      let toDisplay = true;
      let shouldCheckMore = true;
      queriesArray.forEach(([queryName, queryValue]) => {
         if (!shouldCheckMore) {
            return;
         }
         if (queryName === 'text') {
            if (offer.title.toLowerCase().includes(queryValue.toLowerCase())) {
               toDisplay = true;
            } else {
               toDisplay = false;
               shouldCheckMore = false;
            }
            return;
         }
         if (queryValue.toLowerCase() === offer[queryName].toLowerCase() && shouldCheckMore) {
            toDisplay = true;
         } else {
            toDisplay = false;
            shouldCheckMore = false;
         }
      });
      return toDisplay;
   });
};

export const creteFilteredQueriesArray = (queries: OffersFilterParams): Array<[string, string]> => (
   Object.entries(queries).filter(([_, value]) => value)
);

export const deleteEmptyQueries = (queries: OffersFilterParams) => (
   Object.entries(queries).reduce((out, [queryName, queryValue]) => (
      queryValue ? { ...out, [queryName]: queryValue } : out
   ), {})
);
