import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type ContactResourcePropsType = {
    iconContact: string,
    contactName: string
}

export const ContactResource = (props: ContactResourcePropsType) => {
    return (
        <FlexWrapper align={"center"}>
            <Icon iconId={props.iconContact}></Icon>
            <StyledText>{props.contactName}</StyledText>
        </FlexWrapper>
    );
};

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  max-width: 550px;
  font-weight: 400;
  font-size: 16px;
  padding-left: 8px;
`