import AppContainer from '#/components/AppContainer/AppContainer';
import * as itLogo from '#/public/itLogo.svg';
import * as React from 'react';
import { AuthLinksWrapper, Background, Wrapper } from './styled';

const NavBar: React.FC = () => {
   return (
      <AppContainer>
         <Background />
         <Wrapper>
            <img src={itLogo} alt="it board logo" width={`${8 * 6}px`} />
            <AuthLinksWrapper>
               <li>Log in</li>
            </AuthLinksWrapper>
         </Wrapper>
      </AppContainer>

   );
};

export default NavBar;
