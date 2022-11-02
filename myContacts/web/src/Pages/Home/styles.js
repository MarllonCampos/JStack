import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;
  margin-top:32px;


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
      color: #fff;
   }
  }
`;

export const ListHeader = styled.header`
  margin: 24px 0;
  border:0;

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
  img {
    transition: transform 0.2s linear;
    &.desc {
      transform: rotate(180deg);
    }
  }

`;

export const InputSearchContainer = styled.div`
  width:100%;

  input {
    width:100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow:0 4px 10px rgba(0,0,0,0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]}
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

export const ErrorContainer = styled.div`
  margin-top:16px;

  display:flex;
  align-items:center;
  .details {
    margin-left: 24px;

    strong {
      font-size:22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display:block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top:16px;
  display:flex;
  flex-direction:column;
  align-items:center;
  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top:8px;
  }
  strong {
    color: ${({ theme }) => theme.colors.primary.main}

  }
`;
