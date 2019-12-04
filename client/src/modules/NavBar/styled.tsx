import styled from 'styled-components';

export const Wrapper = styled.nav`
   display: flex;
   justify-content: space-between;
`;

export const AuthLinksWrapper = styled.ul`
   li {
      list-style-type: none;
      font-weight: 600;
   }
`;

export const Background = styled.div`
   content: '';
   left: 0;
   top: 0;
   width: 100%;
   position: absolute;
   height: 80px;
   box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
`;
