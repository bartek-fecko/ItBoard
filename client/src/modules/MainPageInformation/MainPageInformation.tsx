import AppContainer from '#/components/AppContainer/AppContainer';
import * as accountLogo from '#/public/account.svg';
import * as researchLogo from '#/public/research.svg';
import * as resumeLogo from '#/public/resume.svg';
import * as React from 'react';
import { BoxesWrapper, BoxWrapper, Header, Wrapper } from './styled';

const MainPageInformation: React.FC = () => {
   return (
      <AppContainer>
         <Wrapper>
            <Header>How it Works ?</Header>
            <BoxesWrapper>
               <BoxWrapper>
                  <img src={accountLogo} alt="account logo" />
                  <h2>Create Account</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiing elit. olor sit amet consectetu dsa sdf.</p>
               </BoxWrapper>
               <BoxWrapper>
                  <img src={researchLogo} alt="research logo" />
                  <h2>Research</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiing elit. olor sit amet consectetu dsa sdf.</p>
               </BoxWrapper>
               <BoxWrapper>
                  <img src={resumeLogo} alt="resume logo" />
                  <h2>Send Cv</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiing elit. olor sit amet consectetu dsa sdf.</p>
               </BoxWrapper>
            </BoxesWrapper>
         </Wrapper>
      </AppContainer>
   );
};

export default MainPageInformation;
