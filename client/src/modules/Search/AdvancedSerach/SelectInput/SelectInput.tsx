import AppState from '#/config/appState';
import { setFilterParams } from '#/store/OffersStore/actions';
import { OffersActions, UseQueryParamsConstructor } from '#/store/OffersStore/constants';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecodedValueMap } from 'use-query-params';
import { CustomSelect } from './styled';

interface SelectInputProps {
   optionArray: string[];
   name: string;
   placeholder: string;
   queries: DecodedValueMap<UseQueryParamsConstructor>;
}

const SelectInput: React.FC<SelectInputProps> = ({ optionArray, name, placeholder, queries }) => {
   const dispatch = useDispatch<React.Dispatch<OffersActions>>();
   const filterParams = useSelector((state: AppState) => state.offers.filterParams);

   const changeSelectValue = (e) => {
      const selectInput = e.target as HTMLSelectElement;
      const selectName = selectInput.name;
      const selectValue = selectInput.value;
      dispatch(setFilterParams({ [selectName]: selectValue }));
   };

   return (
      <CustomSelect
         name={name}
         defaultValue={queries.language}
         value={filterParams[name] || placeholder}
         onChange={changeSelectValue}
      >
         <option value="">{placeholder}</option>
         {optionArray.map((value: string, i: number) => (
            <option
               value={value}
               key={i}
            >
               {value}
            </option>
         ))}
      </CustomSelect>
   );
};

export default SelectInput;
