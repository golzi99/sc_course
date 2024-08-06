import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";
import {myTheme} from "../Theme.styled";
import {font} from "../Common";

type StyledBtnPropsType = {
    typeLinkButton: "primary" | "secondary",
    width?: string
}

export const StyledLinkButton = styled(NavLink)<StyledBtnPropsType>`
  ${font({color: myTheme.colors.fontWhite, weight: 500, Fmin: 16, Fmax: 16})}
  padding: 8px 16px 8px 16px;
  background-color: transparent;
  height: fit-content;
  width: ${props => props.width || "100%"};
  text-align: center;

  ${props => props.typeLinkButton === "primary" && css<StyledBtnPropsType>`
    border: ${myTheme.colors.mainPurpleColor} solid 1px;

    &:hover {
      background-color: rgba(199, 120, 221, 0.2);
    }
  `}

  ${props => props.typeLinkButton === "secondary" && css<StyledBtnPropsType>`
    border: ${myTheme.colors.lightGrey} solid 1px;

    ${font({color: myTheme.colors.lightGrey, weight: 500, Fmin: 16, Fmax: 16})}
    &:hover {
      background-color: rgba(171, 178, 191, 0.2);
    }
  `}
`