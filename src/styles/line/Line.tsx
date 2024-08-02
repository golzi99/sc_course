import styled, {css} from "styled-components";
import {myTheme} from "../Theme.styled";

type StyledLineType = {
    lineWidth: string
    colorLine?: string
    mediaStop?: string
}

export const StyledLine = styled.span<StyledLineType>`
  background-color: ${props => props.colorLine || myTheme.colors.mainPurpleColor};
  width: ${props => props.lineWidth || "100px"};
  height: 1px;
  margin-left: 20px;

  ${props => props.mediaStop && css<StyledLineType>`
    @media (max-width: ${props.mediaStop}) {
      display: none;
    }
  `}
`