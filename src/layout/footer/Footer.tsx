import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {myTheme} from "../../styles/Theme.styled";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"row"} justify={"space-between"}>
                <FlexWrapper direction={"column"}>
                    <FlexWrapper align={"center"} justify={"space-between"}>
                        <Logo></Logo>
                        <StyledText>elias@elias-dev.ml</StyledText>
                    </FlexWrapper>
                    <StyledWhiteText>Web designer and front-end developer</StyledWhiteText>
                </FlexWrapper>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <StyledWhiteText>Media</StyledWhiteText>
                    <FlexWrapper>
                        <Icon iconId={"githubSvg"}></Icon>
                        <Icon iconId={"figmaSvg"}></Icon>
                        <Icon iconId={"discordSvg"}></Icon>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper justify={"center"}>
                <StyledText>© Copyright 2024. Made by Elias</StyledText>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding-top: 5vh;
  background-color: #282C33;
  padding-left: 10%;
  padding-right: 10%;
`

const StyledWhiteText = styled.p`
  color: ${myTheme.colors.white};
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  font-weight: 400;
  font-size: 16px;
`