import styled from "styled-components";
import {myTheme} from "../Theme.styled";

export const StyledTitle = styled.h2`
  color: ${myTheme.colors.fontWhite};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

export const StyledBaseText = styled.p`
  color: ${myTheme.colors.lightGrey};
`

export const StyledWhiteText = styled.p`
  color: ${myTheme.colors.fontWhite};
`