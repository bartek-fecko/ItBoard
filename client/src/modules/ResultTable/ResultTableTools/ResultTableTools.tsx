import { requestOffers, setFilterParams } from '#/store/OffersStore/actions';
import { OffersFilterParams, UseQueryParamsConstructor } from '#/store/OffersStore/constants';
import { debounce } from '#/utils/debounce';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { StringParam, useQueryParams } from 'use-query-params';
import { deleteEmptyQueries } from '../ResultTableBody/helpers';
import {
   CustomCheckbox,
   LevelCheckboxesWraper,
   LevelInput,
   LevelLabel,
   SearchInput,
   Wrapper,
} from './styled';

const ResultTableTools: React.FC = () => {
   const dispatch = useDispatch();
   const [queries] = useQueryParams<UseQueryParamsConstructor>({
      language: StringParam,
      location: StringParam,
      seniority: StringParam,
      text: StringParam,
   });
   let searchText: string;

   const quickSearchHandler = () => {
      const filteredQueries = deleteEmptyQueries(queries as OffersFilterParams);
      dispatch(setFilterParams({ ...filteredQueries, text: searchText } as OffersFilterParams));
      dispatch(requestOffers());
   };

   const searchEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      searchText = e.target.value;
      updateOffers();
   };

   const updateOffers = debounce(quickSearchHandler, 1000);

   return (
      <Wrapper>
         <SearchInput placeholder="Search job" onChange={searchEventHandler} />
         <LevelCheckboxesWraper>
            <LevelLabel>
               <LevelInput type="radio" name="level" />
               <CustomCheckbox />
               Junior
            </LevelLabel>
            <LevelLabel>
               <LevelInput type="radio" name="level" />
               <CustomCheckbox />
               Mid
            </LevelLabel>
            <LevelLabel>
               <LevelInput type="radio" name="level" />
               <CustomCheckbox />
               Senior
            </LevelLabel>
         </LevelCheckboxesWraper>
      </Wrapper>
   );
};

export default ResultTableTools;
