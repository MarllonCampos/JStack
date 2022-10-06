import styled from 'styled-components';

export const Container = styled.div`


  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      transform:rotate(-90deg);
    }

    h1 {
      font-size: 24px;
    }
  }
`;
