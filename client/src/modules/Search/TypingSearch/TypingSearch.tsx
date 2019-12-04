import * as searchIcon from '#/public/loopLogo.svg';
import * as React from 'react';
import { SearchIcon, SearchInput, Wrapper } from './styled';

const TypingSearch: React.FC = () => {
   return (
      <Wrapper>
         <SearchInput placeholder="Type your job" />
         <SearchIcon src={searchIcon} />
      </Wrapper>
   );
};

export default TypingSearch;
