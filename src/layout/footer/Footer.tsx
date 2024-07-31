import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {myTheme} from "../../styles/Theme.styled";
import {Icon} from "../../components/icon/Icon";
import { Container } from '../../components/Container';
import {StyledBaseText, StyledWhiteText} from '../../styles/texts/Texts';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <StyledFooterBox justify={"space-between"} align={"center"}>
                        <FlexWrapper direction={"column"}>
                            <StyledLogoFooter align={"center"}>
                                <Logo></Logo>
                                <StyledBaseText>elias@elias-dev.ml</StyledBaseText>
                            </StyledLogoFooter>
                            <StyledWhiteText>Web designer and front-end developer</StyledWhiteText>
                        </FlexWrapper>
                        <FlexWrapper direction={"column"}>
                            <StyledMedia>Media</StyledMedia>
                            <FlexWrapper>
                                <Icon iconId={"githubSvg"}></Icon>
                                <Icon iconId={"figmaSvg"}></Icon>
                                <Icon iconId={"discordSvg"}></Icon>
                            </FlexWrapper>
                        </FlexWrapper>
                    </StyledFooterBox>
                    <StyledBaseText>© Copyright 2024. Made by Elias</StyledBaseText>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  border-top: ${myTheme.colors.lightGrey} solid 1px;
`

const StyledLogoFooter = styled(FlexWrapper)`
  gap: 16px;
  margin-bottom: 16px;
`

const StyledFooterBox = styled(FlexWrapper)`
  width: 100%;
  margin-bottom: 16px;
`

const StyledMedia = styled(StyledWhiteText)`
  font-size: 24px;
  margin-bottom: 16px;
`