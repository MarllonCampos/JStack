import styled from 'styled-components';

export default styled.select`
  width: 100%;
  border: none;
  background: #FFF;
  box-shadow:  0 4px 10px rgba(0,0,0,0.04);
  height: 52px;
  border-radius:4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;

 &:focus {
  outline: 2px solid ${({ theme }) => theme.colors.primary.main}
 }
`;
