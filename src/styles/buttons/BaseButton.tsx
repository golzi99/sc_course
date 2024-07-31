import styled, { css } from "styled-components";
import {NavLink} from "react-router-dom";
import {myTheme} from "../Theme.styled";

type StyledBtnPropsType = {
    disable?: boolean
}

export const StyledLinkButton = styled(NavLink)<StyledBtnPropsType>`
  padding: 8px 16px 8px 16px;
  border: ${myTheme.colors.mainPurpleColor} solid 1px;
  background-color: transparent;
  color: ${myTheme.colors.fontWhite};
  width: fit-content;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(199, 120, 221, 0.2);
  }
  
  ${props => props.disable && css<StyledBtnPropsType>`
    border: ${myTheme.colors.lightGrey} solid 1px;
    color: ${myTheme.colors.lightGrey};
    cursor: not-allowed;
    pointer-events: none; /* Отключаем все события мыши */

    &:hover {
      background: transparent;
    }
  `}
`

// ?? правильно сделана ли кнопка ?