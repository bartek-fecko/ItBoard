import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  color: #7C8A95;
  transform: translateY(-9px);
  @media screen and (min-width: 665px) {
    padding-left: 150px;
  }
  @media screen and (max-width: 573px) {
    transform: translateY(-4px);
  }
`;

export const City = styled.p`
  font-size: 0.9em;
`;

export const LocationIcon = styled.img`
  height: 1em;
  margin-top: 4px;
  margin-right: 4px;
`;
