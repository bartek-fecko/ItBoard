import AppContainer from '#/components/AppContainer/AppContainer';
import { BlueBackground } from '#/components/AppContainer/styled';
import AdvancedSearch from '#/modules/Search/AdvancedSerach/AdvancedSearch';
import TypingSearch from '#/modules/Search/TypingSearch/TypingSearch';
import * as React from 'react';
import { Wrapper } from './styled';

export const Search: React.FC = () => {
   return (
      <AppContainer>
         <BlueBackground />
         <Wrapper>
            <TypingSearch />
            <AdvancedSearch />
         </Wrapper>
      </AppContainer>
   );
};
