import styled from 'styled-components';

export const Wrapper = styled.section`
   max-width: 760px;
   width: 100%;
   margin: 32px auto;
   * {
      color: #4E5661;
   }
`;

export const Header = styled.h1`
   text-align: center;
   font-size: 1.8em;
   /* opacity: 0.9; */
`;

export const BoxesWrapper = styled.div`
   display: flex;
   margin: ${8 * 8}px auto;
   @media screen and (max-width: 610px){
      display: block;
      & > div {
         margin-top: 24px;
      }
   }
`;

export const BoxWrapper = styled.div`
   text-align: center;
   padding: 0 ${8 * 3}px;
   img {
      width: 4rem;
   }
   h2 {
      margin-top: 0;
      font-size: 1.2em;
      font-weight: 400;
   }
   p {
      font-size: 0.9em;
      opacity: 0.56;
      line-height: 130%;
   }
`;
