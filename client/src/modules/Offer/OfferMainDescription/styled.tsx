import styled from 'styled-components';

export const Wrapper = styled.div`
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
  width: auto;
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

export const SubTextWrapper = styled.div`
  display: flex;
`;
