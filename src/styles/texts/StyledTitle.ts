import styled from "styled-components";
import { font } from "../Common";
import {myTheme} from "../Theme.styled";

export const StyledTitle = styled.h2`
  ${font({color: myTheme.colors.fontWhite, weight: 600, Fmin: 32, Fmax: 32})};

  span {
    ${font({color: myTheme.colors.mainPurpleColor, weight: 600, Fmin: 32, Fmax: 32})};
  }
`