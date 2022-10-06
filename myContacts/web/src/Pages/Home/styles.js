import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;


  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    transition: all 0.2s ease-in;
   &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff
   }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  border:0;

  header {
    margin-bottom: 8px;

    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
          margin-right: 8px;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.primary.main}
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items:center;
  justify-content: space-between;
  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;

      small {
        background:  ${({ theme }) => theme.colors.primary.lighter};
        color:  ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
      }
    }


    span {
      display: block;
      color:  ${({ theme }) => theme.colors.gray[200]};
      font-size: 14px

    }
  }

  .actions {
    display:flex;
    align-items: center;
    gap: 8px;
    button {
      background: transparent;
      border:none;
    }

    a {

    }
  }


`;