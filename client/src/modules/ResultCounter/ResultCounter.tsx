import AppContainer from '#/components/AppContainer/AppContainer';
import { BlueBackground } from '#/components/AppContainer/styled';
import AppState from '#/config/appState';
import * as React from 'react';
import { useSelector } from 'react-redux';
import {  Wrapper } from './styled';

const ResultCounter: React.FC = () => {
   const offersTotal = useSelector((state: AppState) => state.offers.totalOffers);

   return (
      <AppContainer>
         <BlueBackground />
         <Wrapper>
            <h2>Recent Jobs</h2>
            <p>We found {offersTotal} available job(s) for you</p>
         </Wrapper>
      </AppContainer>
   );
};

export default ResultCounter;
