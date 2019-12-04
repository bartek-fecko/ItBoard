import styled from 'styled-components';

export const Wrapper = styled.div`
   position: relative;
`;

export const SearchInput = styled.input`
   width: 100%;
   padding: ${8 * 2}px ${8 * 3}px;
   font-weight: 600;
   outline: none;
   border: none;
   border-bottom: 2px solid rgba(0, 187, 236, 1);
   font-size: 1.2em;
   ::placeholder {
      color: rgba(0, 0, 0, 0.2);
   }
`;

export const SearchIcon = styled.img`
   position: absolute;
   right: 16px;
   bottom: 0;
   top: 0;
   margin: auto;
   width: ${8 * 3}px;
`;
