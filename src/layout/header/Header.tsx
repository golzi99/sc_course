import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "./menu/HeaderMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import { myTheme } from '../../styles/Theme.styled';
import { Container } from '../../components/Container';
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {StyledLine} from "../../styles/line/Line";
import {Icon} from "../../components/icon/Icon";

// сделал отельную копоненту, чтобы в футоре не отображалось лого, прокинул через rest

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledWrapperHeader justify={"space-between"} align={"center"}>
                    <SocialLine>
                        <StyledLine lineWidth={"191px"} colorLine={myTheme.colors.lightGrey}/>
                        <StyledIcon height={"32"} width={"32"} iconId={"githubSvg"}/>
                        <StyledIcon height={"32"} width={"32"} iconId={"dribbleSvg"}/>
                        <StyledIcon height={"32"} width={"32"} iconId={"figmaSvg"}/>
                    </SocialLine>
                    <HeaderLogo/>
                    <HeaderMenu/>
                    <MobileMenu/>
                </StyledWrapperHeader>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: ${myTheme.colors.primaryBg};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
`

const StyledWrapperHeader = styled(FlexWrapper)`
  position: relative;
  padding: 0 8px;
`

const HeaderLogo = styled(Logo)`
  z-index: 999;
`

const StyledIcon = styled(Icon)`
  transform: rotate(-90deg);
`

const SocialLine = styled.div`
  position: absolute;
  top: -33px;
  left: -100px;
  z-index: 99;
  display: flex;
  align-items: center;
  transform-origin: left center;
  transform: rotate(90deg);
  
  @media (max-width: 1256px) {
    display: none;
  }
`

// const MenuBurger = styled.div`
//   display: none;
//
//   @media ${myTheme.media.tablet} {
//     display: block;
//   }
// `
