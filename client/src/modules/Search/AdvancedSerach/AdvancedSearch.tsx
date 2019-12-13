import AppState from '#/config/appState';
import history from '#/config/browserHistory';
import {
   removeFilterParams,
   requestOffers,
} from '#/store/OffersStore/actions';
import {
   offerCities,
   offerProgrammingLanguages,
   OffersActions,
   offerSeniority,
   UseQueryParamsConstructor,
} from '#/store/OffersStore/constants';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StringParam, useQueryParams } from 'use-query-params';
import SelectInput from './SelectInput/SelectInput';
import {
   ApplyButton,
   Buttons,
   ResetButton,
   ResultCounter,
   SelectWrapper,
   Tools,
   Wrapper,
} from './styled';

const AdvancedSearch: React.FC = () => {
   const dispatch = useDispatch<React.Dispatch<OffersActions>>();
   const filterParams = useSelector((state: AppState) => state.offers.filterParams);
   const [queries] = useQueryParams<UseQueryParamsConstructor>({
      language: StringParam,
      location: StringParam,
      seniority: StringParam,
      text: StringParam,
   });
   const offersTotal = useSelector((state: AppState) => state.offers.totalOffers);

   const handleGetOffers = () => {
      dispatch(requestOffers(filterParams));
   };

   const handleResetOffers = () => {
      dispatch(removeFilterParams());
      history.push('/');
      dispatch(requestOffers());
   };

   return (
      <Wrapper>
         <h5>ADVANCED SEARCH</h5>
         <SelectWrapper>
            <SelectInput
               optionArray={offerProgrammingLanguages}
               placeholder="Select your language"
               name="language"
               queries={queries}
            />
            <SelectInput
               optionArray={offerSeniority}
               placeholder="Select seniority"
               name="seniority"
               queries={queries}
            />
            <SelectInput
               optionArray={offerCities}
               placeholder="Select city"
               name="location"
               queries={queries}
            />
         </SelectWrapper>
         <Tools>
            <ResultCounter>
               <span>{offersTotal}</span>
               <span>results</span>
            </ResultCounter>
            <Buttons>
               <ResetButton onClick={handleResetOffers}>RESET</ResetButton>
               <ApplyButton onClick={handleGetOffers}>SEARCH</ApplyButton>
            </Buttons>
         </Tools>
      </Wrapper>
   );
};

export default AdvancedSearch;
