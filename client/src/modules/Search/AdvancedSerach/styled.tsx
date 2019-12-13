import * as arrowDown from '#/public/arrowDown.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
   padding: 24px 24px;
   h5 {
      font-weight: 700;
      color: rgba(0,0,0,0.57);
   }
`;

export const SelectWrapper = styled.div`
   display: flex;
   flex-flow: row wrap;
`;

const blueColor = 'rgba(0, 187, 236, 1)';

export const Tools = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: baseline;
   margin-top: 64px;
`;

export const ResultCounter = styled.div`
   span:first-child {
      color: rgba(0, 187, 236, 1);
      font-size: 0.95em;
      margin-right: 4px;
   }
   span:last-child {
      color: #666;
      font-size: 0.8em;
   }
`;

export const Buttons = styled.div`
   display: flex;
`;

const Button = styled.button`
   cursor: pointer;
   outline: none;
   border: none;
   font-weight: 700;
   z-index: 4;
`;

export const ResetButton = styled(Button)`
   background: white;
   color: rgba(0,0,0,0.67);
   margin-right: 24px;
`;

export const ApplyButton = styled(Button)`
   padding: 14px 24px;
   box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
   color: white;
   font-size: 0.9rem;
   background: ${blueColor};
   &:hover {
      opacity: 0.8;
   }
`;
