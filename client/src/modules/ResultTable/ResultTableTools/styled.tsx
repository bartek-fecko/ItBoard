import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid #F3F7FC;
`;

export const SearchInput = styled.input`
   min-width: 150px;
   padding: ${8 * 2}px ${8 * 3}px;
   font-weight: 600;
   outline: none;
   border: none;
   ::placeholder {
      color: rgba(0, 0, 0, 0.4);
   }
`;

export const LevelCheckboxesWraper = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const LevelLabel = styled.label`
  position: relative;
  text-transform: uppercase;
  color: rgba(0,0,0,0.57);
  font-weight: 600;
  font-size: 0.7em;
  margin: 0 8px;
`;

export const LevelInput = styled.input`
  opacity: 0;
  cursor: pointer;
  &:checked ~ span {
    background: white;
    border: 2px solid orange;
  }
`;

export const CustomCheckbox = styled.span`
  position: absolute;
  background: #E9EFFB;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  left: 0;
  top: 3px;
`;
