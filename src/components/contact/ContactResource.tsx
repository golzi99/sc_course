import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

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
  ${font({color: myTheme.colors.lightGrey, weight: 400, Fmin: 16, Fmax: 16})};
  padding-left: 8px;
`