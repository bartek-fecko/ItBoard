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

export const CustomSelect = styled.select`
   display: block;
   max-width: calc(50% - 8px);
   flex-grow: 1;
	font-size: 14px;
	font-weight: 600;
	color: rgb(102, 102, 102);
	line-height: 1.3;
	padding: 8px 24px;
	box-sizing: border-box;
	margin: 0;
   margin-top: 8px;
	border: 1px solid rgba(0,0,0,0.2);
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url(${arrowDown});
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
   margin-right: 8px;
   option {
      display: block;
      padding: 8px 24px;
   }
   &:focus {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
      outline: none;
   }
   &::-ms-expand {
      display: none;
   }
`;

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
