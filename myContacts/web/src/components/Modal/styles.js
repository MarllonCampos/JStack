import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);

  position: absolute;
  inset:0;

  display:flex;
  justify-content: center;
  align-items: center;

`;

export const Container = styled.div`
  width:100%;
  max-width: 450px;

  background: #FFF;
  border-radius:4px;

  padding:24px;
  box-shadow:  0 4px 10px rgba(0,0,0,0.04);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )}
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display:flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]}
  }
`;
