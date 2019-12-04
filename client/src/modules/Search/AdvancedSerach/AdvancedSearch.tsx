import * as React from 'react';
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
   return (
      <Wrapper>
         <h5>ADVANCED SEARCH</h5>
         <SelectWrapper>
            <CustomSelect>
               <option>Accesories</option>
               <option>C++</option>
            </CustomSelect>
            <CustomSelect>
               <option>Javscript</option>
               <option>C++</option>
            </CustomSelect>
            <CustomSelect>
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
               <ApplyButton>SEARCH</ApplyButton>
            </Buttons>
         </Tools>
      </Wrapper>
   );
};

export default AdvancedSearch;
