import AppContainer from '#/components/AppContainer/AppContainer';
import { BlueBackground } from '#/components/AppContainer/styled';
import * as React from 'react';
import ResultTableBody from './ResultTableBody/ResultTableBody';
import ResultTableTools from './ResultTableTools/ResultTableTools';
import {  Wrapper } from './styled';

const ResultTable: React.FC = () => {
   return (
      <AppContainer>
         <BlueBackground />
         <Wrapper>
            <ResultTableTools />
            <ResultTableBody />
         </Wrapper>
      </AppContainer>
   );
};

export default ResultTable;
