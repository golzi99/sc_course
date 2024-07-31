import React from 'react';
import {MainIcon} from "../icon/MainIcon";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const Logo = () => {
    return (
        <StyledLink to={"/home"}>
            <FlexWrapper align={"center"}>
                <MainIcon iconId={"iconDefaultSvg"} width={"20px"} height={"20px"}/>
                <LogoText>Elias</LogoText>
            </FlexWrapper>
        </StyledLink>
    );
};

const LogoText = styled.p`
  font-size: 16px;
  padding-left: 5px;
  color: snow;
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
`


