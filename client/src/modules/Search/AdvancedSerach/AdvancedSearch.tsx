import AppState from '#/config/appState';
import history from '#/config/browserHistory';
import { requestOffers, setFilterParams } from '#/store/OffersStore/actions';
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
import {
   ApplyButton,
   Buttons,
   CustomSelect,
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

   const changeSelectValue = (e) => {
      const selectInput = e.target as HTMLSelectElement;
      const selectName = selectInput.name;
      const selectValue = selectInput.value;
      dispatch(setFilterParams({ [selectName]: selectValue }));
   };

   const handleGetOffers = () => {
      dispatch(requestOffers(filterParams));
   };

   const handleResetOffers = () => {
      dispatch(setFilterParams({}));
      history.push('/');
      dispatch(requestOffers());
   };

   return (
      <Wrapper>
         <h5>ADVANCED SEARCH</h5>
         <SelectWrapper>
            <CustomSelect
               name="language"
               defaultValue={queries.language}
               onChange={changeSelectValue}
            >
               <option value="">Select Language</option>
               {offerProgrammingLanguages.map((language: string, i: number) => (
                  <option
                     value={language}
                     key={i}
                  >
                     {language}
                  </option>
               ))}
            </CustomSelect>
            <CustomSelect
               name="seniority"
               defaultValue={queries.seniority}
               onChange={changeSelectValue}
            >
               <option value="">Select your level</option>
               {offerSeniority.map((level: string, i: number) => (
                  <option
                     value={level}
                     key={i}
                  >
                     {level}
                  </option>
               ))}
            </CustomSelect>
            <CustomSelect
               name="location"
               defaultValue={queries.location}
               onChange={changeSelectValue}
            >
               <option value="">Select City</option>
               {offerCities.map((city: string, i: number) => (
                  <option
                     value={city}
                     key={i}
                  >
                     {city}
                  </option>
               ))}
            </CustomSelect>
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
