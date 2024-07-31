import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type BaseTitlePropsType = {
    titleText: string
}

export const BaseTitle = (props: BaseTitlePropsType) => {
    return (
        <StyledTitle><span>#</span>{props.titleText}</StyledTitle>
    );
};

const StyledTitle = styled.h2`
  font-size: 32px;
  color: ${myTheme.colors.fontWhite};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`