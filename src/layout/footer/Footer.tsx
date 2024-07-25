import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {myTheme} from "../../styles/Theme.styled";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <StyledFooterBox justify={"space-between"} align={"center"}>
                        <FlexWrapper direction={"column"}>
                            <StyledLogoFooter align={"center"}>
                                <Logo></Logo>
                                <StyledText>elias@elias-dev.ml</StyledText>
                            </StyledLogoFooter>
                            <StyledJob>Web designer and front-end developer</StyledJob>
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
                    <StyledText>© Copyright 2024. Made by Elias</StyledText>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  border-top: ${myTheme.colors.lightGrey} solid 1px;
`

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  //border: red solid 1px;
  margin: 0 auto;
  padding: 20px 0;
`

const StyledLogoFooter = styled(FlexWrapper)`
  gap: 20px;
`

const StyledFooterBox = styled(FlexWrapper)`
  width: 100%;
`

const StyledMedia = styled.p`
  color: ${myTheme.colors.white};
  font-size: 24px;
`

const StyledJob = styled.p`
  color: ${myTheme.colors.white};
  font-size: 16px;
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  font-weight: 400;
  font-size: 16px;
  padding: 20px 0;
`