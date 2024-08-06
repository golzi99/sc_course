import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {font} from "../../styles/Common";
import {myTheme} from "../../styles/Theme.styled";

type ContactResourcePropsType = {
    iconContact: string,
    contactName: string,
}

export const ContactResource = (props: ContactResourcePropsType) => {
    return (
        <StyledContactWrapper align={"center"}>
            <StyledIcon iconId={props.iconContact}></StyledIcon>
            <StyledText>{props.contactName}</StyledText>
        </StyledContactWrapper>
    );
};

const StyledText = styled.p`
  ${font({Fmin: 16, Fmax: 16})};
  padding-left: 8px;
`

const StyledContactWrapper = styled(FlexWrapper)`
  &:hover{
    ${StyledText} {
      color: ${myTheme.colors.fontWhite};
    }
  }
`

const StyledIcon = styled(Icon)`
  &:hover {
    fill: ${myTheme.colors.fontWhite};
  }
`