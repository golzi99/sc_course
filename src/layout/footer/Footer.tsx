import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {myTheme} from "../../styles/Theme.styled";
import {Icon} from "../../components/icon/Icon";
import { Container } from '../../components/Container';
import {StyledBaseText, StyledWhiteText} from '../../styles/texts/Texts';
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <StyledFooterBox justify={"space-between"} align={"center"} wrap={"wrap"}>
                        <FlexWrapper direction={"column"}>
                            <StyledLogoFooter justify={"space-between"} align={"center"}>
                                <Logo></Logo>
                                <StyledBaseText>elias@elias-dev.ml</StyledBaseText>
                            </StyledLogoFooter>
                            <Text>Web designer and front-end developer</Text>
                        </FlexWrapper>
                        <MediaWrapper direction={"column"}>
                            <StyledMedia>Media</StyledMedia>
                            <FlexWrapper>
                                <Icon iconId={"githubSvg"}></Icon>
                                <Icon iconId={"figmaSvg"}></Icon>
                                <Icon iconId={"discordSvg"}></Icon>
                            </FlexWrapper>
                        </MediaWrapper>
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

const Text = styled.p`
  ${font({color: myTheme.colors.fontWhite})};
  white-space: nowrap;
`

const StyledLogoFooter = styled(FlexWrapper)`
  margin-bottom: 16px;
`

const MediaWrapper = styled(FlexWrapper)`
  @media ${myTheme.media.mobile} {
    align-items: center;
  }
`

const StyledFooterBox = styled(FlexWrapper)`
  width: 100%;
  margin-bottom: 16px;
  
  @media ${myTheme.media.mobile} {
    gap: 20px;
    flex-direction: column;
  }
`

const StyledMedia = styled(StyledWhiteText)`
  font-size: 24px;
  margin-bottom: 16px;
`