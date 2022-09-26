import styled, { css } from 'styled-components';


export const Container = styled.article`
  display: inline-block; 
  margin: 12px 24px;
  max-width: 11rem;
  ${({ removed }) => css`
    opacity: ${({ removed }) => removed ? 0.5 : 1};
    color: ${({ removed }) => removed ? "#f00" : "#faa"};
  
  `}
`;

export const PostMetaInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Subtitle = styled.small`
  display:block;
`;

export const Rate = styled.span`

  font-size: 12px;

  opacity: 0.7;

  color: #fafafa;
  font-weight:800;
`;