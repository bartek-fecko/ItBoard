import styled from 'styled-components';

export const Wrapper = styled.div`
   font-size: 10px;
   margin: 50px auto;
   text-indent: -9999em;
   width: 7em;
   height: 7em;
   border-radius: 50%;
   background: #ffffff;
   background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
   background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
   background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
   background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
   background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
   position: relative;
   -webkit-animation: spin 1.4s infinite linear;
   animation: spin 1.4s infinite linear;
   -webkit-transform: translateZ(0);
   -ms-transform: translateZ(0);
   transform: translateZ(0);
   z-index: 5;
   &::before {
      z-index: 6;
      content: '';
      width: 50%;
      height: 50%;
      background: #0dc5c1;
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
   }
   &::after {
      z-index: 7;
      content: '';
      background: white;
      width: 75%;
      height: 75%;
      border-radius: 50%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
   }
   @keyframes spin {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;
