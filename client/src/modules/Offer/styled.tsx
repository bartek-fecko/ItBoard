import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  display: flex;
  width: 100%;
  border-radius: 4px;
  padding: 16px 16px;
  &:hover {
    background-color: #EAF0FC;
  }
  &:hover button {
    background-color: #3DB8DA;
    color: white;
  }
  @media screen and (max-width: 940px) {
    cursor: pointer;
  }
`;

export const EmploymentStatus = styled.span`
  color: #3DB7DC;
`;

export const Banner = styled.img`
  width: 1em;
  transform: translateY(4px);
`;

export const ViewButton = styled.button`
  text-transform: uppercase;
  background-color: #EAF0FC;
  padding: 0 32px;
  height: 2.5em;
  outline: none;
  border: none;
  color: #7C8A95;
  align-self: baseline;
  transform: translateY(19%);
  cursor: pointer;
  display: none;
  @media screen and (min-width: 940px) {
    display: block;
  }
`;
