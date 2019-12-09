import AppState from '#/config/appState';
import { requestOffers, setFilterParams } from '#/store/OffersStore/actions';
import {
   OffersActions,
   OffersFilterParams,
   programmingLanguage,
   seniority,
} from '#/store/OffersStore/constants';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
   const [value, setValue] = React.useState<OffersFilterParams>({});

   const changeSelectValue = (e) => {
      const selectInput = e.target as HTMLSelectElement;
      const selectName = selectInput.name;
      const selectValue = selectInput.value;
      setValue({ [selectName]: selectValue });
      dispatch(setFilterParams({ [selectName]: selectValue }));
   };

   const handleGetOffers = () => {
      dispatch(requestOffers(filterParams));
   };

   return (
      <Wrapper>
         <h5>ADVANCED SEARCH</h5>
         <SelectWrapper>
            <CustomSelect
               name="language"
               onChange={changeSelectValue}
            >
               <option>Select Language</option>
               {programmingLanguage.map((language: string, i: number) => (
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
               onChange={changeSelectValue}
            >
               <option>Select your level</option>
               {seniority.map((level: string, i: number) => (
                  <option
                     value={level}
                     key={i}
                  >
                     {level}
                  </option>
               ))}
            </CustomSelect>
            <CustomSelect>
               <option>Select City</option>
               <option>Javscript</option>
               <option>C++</option>
            </CustomSelect>
         </SelectWrapper>
         <Tools>
            <ResultCounter>
               <span>108</span>
               <span>results</span>
            </ResultCounter>
            <Buttons>
               <ResetButton>RESET</ResetButton>
               <ApplyButton onClick={handleGetOffers}>SEARCH</ApplyButton>
            </Buttons>
         </Tools>
      </Wrapper>
   );
};

export default AdvancedSearch;
