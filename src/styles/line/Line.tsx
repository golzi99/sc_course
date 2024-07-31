import styled from "styled-components";
import {myTheme} from "../Theme.styled";

type StyledLineType = {
    lineWidth?: string
    maxLineWidth?: string
    colorLine?: string
}

export const StyledLine = styled.span<StyledLineType>`
  background-color: ${props => props.colorLine || myTheme.colors.mainPurpleColor};
  width: ${props => props.lineWidth || "25vw"};
  max-width: ${props => props.maxLineWidth || "500px"};
  height: 1px;
  margin-left: 20px;
`