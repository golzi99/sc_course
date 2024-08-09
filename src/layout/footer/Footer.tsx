import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {myTheme} from "../../styles/Theme.styled";
import {Icon} from "../../components/icon/Icon";
import { Container } from '../../components/Container';
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
                                <Text>elias@elias-dev.ml</Text>
                            </StyledLogoFooter>
                            <WhiteText>Web designer and front-end developer</WhiteText>
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
                    <Text>© Copyright 2024. Made by Elias</Text>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  position: relative;
  background-color: ${myTheme.colors.primaryBg};
  border-top: ${myTheme.colors.lightGrey} solid 1px;
`

const WhiteText = styled.p`
  ${font({color: myTheme.colors.fontWhite})};
  white-space: nowrap;
`

const Text = styled.p`
  ${font({})};
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

const StyledMedia = styled.p`
  ${font({color: myTheme.colors.fontWhite, Fmin: 24, Fmax: 24, weight: 500})};
  margin-bottom: 16px;
`