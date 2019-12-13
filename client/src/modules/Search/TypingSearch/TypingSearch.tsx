import AppState from '#/config/appState';
import * as searchIcon from '#/public/loopLogo.svg';
import { setFilterParams } from '#/store/OffersStore/actions';
import { OffersActions } from '#/store/OffersStore/constants';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchIcon, SearchInput, Wrapper } from './styled';

const TypingSearch: React.FC = () => {
   const dispatch = useDispatch<React.Dispatch<OffersActions>>();
   const filterParams = useSelector((state: AppState) => state.offers.filterParams);

   const changeValue = (e: React.ChangeEvent) => {
      const inputValue = (e.target as HTMLInputElement).value;
      dispatch(setFilterParams({ text: inputValue }));
   };

   return (
      <Wrapper>
         <SearchInput
            value={filterParams.text || ''}
            placeholder="Type your job"
            onChange={changeValue}
         />
         <SearchIcon src={searchIcon} />
      </Wrapper>
   );
};

export default TypingSearch;
