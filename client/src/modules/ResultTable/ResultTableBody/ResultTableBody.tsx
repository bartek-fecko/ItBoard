import WithLoader from '#/components/WithLoader/WithLoader';
import AppState from '#/config/appState';
import { requestOffers } from '#/store/OffersStore/actions';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled';
import Offer from '#/modules/Offer/Offer';

const ResultTableBody: React.FC = () => {
   const dispatch = useDispatch();
   const offers = useSelector((state: AppState) => state.offers.data);
   const isLoading = useSelector((state: AppState) => state.offers.isLoading);
   const error = useSelector((state: AppState) => state.offers.error);

   React.useEffect(() => {
      dispatch(requestOffers());
   }, []);

   return (
      <Wrapper>
         <WithLoader isLoading={isLoading} error={error}>
            {/* {offers.map(({language}) => (
               
            ))} */}
            <Offer>js</Offer>
         </WithLoader>
      </Wrapper>
   );
};

export default ResultTableBody;
