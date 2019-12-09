import styled from 'styled-components';

export const Container = styled.div`
   padding: ${8 * 2}px ${8 * 10}px;
   position: relative;
   @media screen and (max-width: 1010px) {
    padding: 16px;
    margin-left:  auto;
    margin-right: auto;
  }
`;

export const BlueBackground = styled.section`
  background: #EAF0FC;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
