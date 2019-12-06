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
`;

export const MainDescription = styled.div`
  display: flex;
  width: 360px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Title = styled.h4`
  margin-top: 0.10em;
  margin-bottom: 0;
  span {
    color: #3DB7DC;
  }
  /* color: #4E5661; */
  /* font-weight: 700; */
`;

export const EmploymentStatus = styled.span`
  color: #3DB7DC;
`;

export const Company = styled.p`
  font-size: 0.8em;
  margin-top: 8px;
  color: rgba(0,0,0,0.5);
`;

export const Image = styled.img`
  height: 3em;
  object-fit: cover;
  margin-right: 1em;
  margin-top: 4px;
  border-radius: 4px;
`;

export const Banner = styled.img`
  width: 1em;
  transform: translateY(4px);
`;

export const CityWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 150px;
  color: #7C8A95;
  transform: translateY(-9px);
`;

export const City = styled.p`
  font-size: 0.9em;
`;

export const LocationIcon = styled.img`
  height: 1em;
  margin-top: 4px;
  margin-right: 4px;
`;

export const ViewButton = styled.button`
  text-transform: uppercase;
  background-color: #EAF0FC;
  padding: 0 32px;
  height: 2.5em;
  outline: none;
  border: none;
  color: #7C8A95;
  align-self: center;
  cursor: pointer;
`;
