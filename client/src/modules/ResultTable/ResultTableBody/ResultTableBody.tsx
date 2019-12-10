import Pagination from '#/components/Pagination/Pagination';
import WithLoader from '#/components/WithLoader/WithLoader';
import AppState from '#/config/appState';
import Offer from '#/modules/Offer/Offer';
import { requestOffers, setFilterParams, setOffersTotal } from '#/store/OffersStore/actions';
import { IOffer, OffersFilterParams } from '#/store/offersStore/constants';
import { UseQueryParamsConstructor } from '#/store/OffersStore/constants';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StringParam, useQueryParams } from 'use-query-params';
import { filterByQueries, deleteEmptyQueries } from './helpers';
import { Wrapper } from './styled';

const ResultTableBody: React.FC = () => {
   const dispatch = useDispatch();
   const offers = useSelector((state: AppState) => state.offers.data);
   const isLoading = useSelector((state: AppState) => state.offers.isLoading);
   const error = useSelector((state: AppState) => state.offers.error);
   const [currentPage, setCurrentPage] = React.useState<number>(1);
   const [offersPerPage] = React.useState<number>(5);
   const [queries] = useQueryParams<UseQueryParamsConstructor>({
      language: StringParam,
      location: StringParam,
      seniority: StringParam,
      text: StringParam,
   });

   React.useEffect(() => {
      dispatch(requestOffers());
      const filteredQueries = deleteEmptyQueries(queries as OffersFilterParams);
      dispatch(setFilterParams(filteredQueries));
   }, []);

   const onPageChange = (currentPageIndex: number) => setCurrentPage(currentPageIndex);

   const lastOffersIndex = currentPage * offersPerPage;
   const firstOffersIndex = lastOffersIndex - offersPerPage;
   const filteredOffers = filterByQueries(queries as OffersFilterParams, offers);
   dispatch(setOffersTotal(filteredOffers.length));

   return (
      <Wrapper>
         <WithLoader isLoading={isLoading} error={error}>
            {filteredOffers.slice(firstOffersIndex, lastOffersIndex).map((offer, i) => (
               <Offer key={i} data={offer} />
            ))}
            <Pagination
               itemsPerPage={offersPerPage}
               totalItems={filteredOffers.length}
               onPageChange={onPageChange}
            />
         </WithLoader>
      </Wrapper>
   );
};

export default ResultTableBody;
