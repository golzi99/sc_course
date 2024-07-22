import React from 'react';
import {MainIcon} from "../icon/MainIcon";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";


export const Logo = () => {
    return (
        <StyledLink href={"/"}>
            <FlexWrapper align={"center"}>
                <MainIcon iconId={"iconDefaultSvg"}/>
                <LogoText>Elias</LogoText>
            </FlexWrapper>
        </StyledLink>
    );
};

const LogoText = styled.p`
  font-size: 32px;
  padding-left: 5px;
  color: snow;
`

const StyledLink = styled.a`
  text-decoration: none;
`


