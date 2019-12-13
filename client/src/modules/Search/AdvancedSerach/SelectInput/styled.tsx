import * as arrowDown from '#/public/arrowDown.svg';
import styled from 'styled-components';

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
