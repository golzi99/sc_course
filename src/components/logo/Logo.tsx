import React from 'react';
import {MainIcon} from "../icon/MainIcon";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {font} from "../../styles/Common";
import {myTheme} from "../../styles/Theme.styled";


export const Logo = ({...rest}) => {
    return (
        <NavLink to={"/"} {...rest}>
            <FlexWrapper align={"center"}>
                <MainIcon iconId={"iconDefaultSvg"} width={"20px"} height={"20px"}/>
                <LogoText>Elias</LogoText>
            </FlexWrapper>
        </NavLink>
    );
};

const LogoText = styled.p`
  ${font({color: myTheme.colors.fontWhite, weight: 700, Fmin: 16, Fmax: 16})}
  padding-left: 5px;
`


