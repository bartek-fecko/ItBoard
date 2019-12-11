import styled from 'styled-components';

export const Wrapper = styled.ul`
   list-style-type: none;
   display: flex;
   flex-wrap: wrap;
   padding-left: 16px;
`;

const primaryBgColor = '#3DB8DA';

export const PaginationItem = styled.li<{ isActive: boolean }>`
   padding: 8px 16px;
   cursor: pointer;
   &:hover {
      background-color: ${primaryBgColor};
      color: white;
   }
   background-color: ${({ isActive }) => isActive ? primaryBgColor : 'transparent'};
   color: ${({ isActive }) => isActive ? 'white' : primaryBgColor};
`;
