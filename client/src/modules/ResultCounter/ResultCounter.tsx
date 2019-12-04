import AppContainer from '#/components/AppContainer/AppContainer';
import { BlueBackground } from '#/components/AppContainer/styled';
import * as React from 'react';
import {  Wrapper } from './styled';

const ResultCounter: React.FC = () => {
   return (
      <AppContainer>
         <BlueBackground />
         <Wrapper>
            <h2>Recent Jobs</h2>
            <p>We found 30 available job(s) for you</p>
         </Wrapper>
      </AppContainer>
   );
};

export default ResultCounter;
