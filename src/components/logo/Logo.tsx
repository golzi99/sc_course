import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";


export const Logo = () => {
    return (
        <a>
            <FlexWrapper align={"center"}>
                <Icon iconId={"iconDefaultSvg"}/>
                <LogoText>Elias</LogoText>
            </FlexWrapper>
        </a>
    );
};

const LogoText = styled.p`
  font-size: 24px;
  padding-left: 5px;
  color: snow;
`


