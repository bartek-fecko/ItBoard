import * as React from 'react';
import {
   CustomCheckbox,
   LevelCheckboxesWraper,
   LevelInput,
   LevelLabel,
   SearchInput,
   Wrapper,
} from './styled';

const ResultTableTools: React.FC = () => {
   const yep =(a) => {
      console.log(a.target.value)
   }
   return (
      <Wrapper>
         <SearchInput placeholder="Search job" />
         <LevelCheckboxesWraper>
            <LevelLabel>
               <LevelInput onChange={yep} type="radio" name="level" />
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
