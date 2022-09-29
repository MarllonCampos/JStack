import styled, { useTheme } from "styled-components";
import themes from '../../styles/themes'

export const Nav = styled.nav`
  background-color: #121212;
  margin-top: ${() => themes.light.spacing.medium}px;
  padding: ${() => themes.light.spacing.medium}px;
  border-radius: 4px;
  a {
    color: #fff;
    display: inline-block;

    & + a {
      margin-left: ${() => themes.light.spacing.medium}px
    }
  }
`