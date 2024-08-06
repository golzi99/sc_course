import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {myTheme} from "../../../styles/Theme.styled";
import {NavLink} from "react-router-dom";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import { font } from '../../../styles/Common';

// есть баг с переключением меню и изменением размеров

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={isOpen} onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <span></span>
            </BurgerButton>

            <MobileMenuWrapper isOpen={isOpen}>
                <ul>
                    <Menuitem>
                        <StyledNav to="/" onClick={() => {setIsOpen(!isOpen)}}><span>#</span>home</StyledNav>
                    </Menuitem>
                    <Menuitem>
                        <StyledNav to="/projects" onClick={() => {setIsOpen(!isOpen)}}><span>#</span>works</StyledNav>
                    </Menuitem>
                    <Menuitem>
                        <StyledNav to="/about-me" onClick={() => {setIsOpen(!isOpen)}}><span>#</span>about-me</StyledNav>
                    </Menuitem>
                    <Menuitem>
                        <StyledNav to="/contacts" onClick={() => {setIsOpen(!isOpen)}}><span>#</span>contacts</StyledNav>
                    </Menuitem>
                    <StyledLanguage name={"language"}>
                        <option>EN</option>
                        <option>RU</option>
                    </StyledLanguage>
                </ul>
                <SocialMedia justify={"center"} align={"center"}>
                    <Icon height={"64"} width={"64"} iconId={"githubSvg"}/>
                    <Icon height={"64"} width={"64"} iconId={"dribbleSvg"}/>
                    <Icon height={"64"} width={"64"} iconId={"figmaSvg"}/>
                </SocialMedia>
            </MobileMenuWrapper>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${myTheme.media.tablet} {
    display: flex;
    align-items: center;
  }
`

const SocialMedia = styled(FlexWrapper)`
  z-index: 998;
  max-height: 64px;
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 24px;
  height: 24px;
  right: 8px;
  z-index: 999;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${myTheme.colors.fontWhite};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: transparent;
    `}
    
    &::before {
      display: block;
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      background-color: ${myTheme.colors.fontWhite};
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0) rotate(-45deg);
      `}

    }

    &::after {
      display: block;
      position: absolute;
      content: "";
      width: 60%;
      height: 2px;
      background-color: ${myTheme.colors.fontWhite};
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0) rotate(45deg);
        width: 100%;
      `}
    }

  }
`

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: ${myTheme.colors.primaryBg};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  padding: 8px;
  margin-top: 60px;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
  `}
  ul {
    flex-grow: 1;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: start;
    padding-top: 50px;
  }
`

const Menuitem = styled.li`
`

const StyledNav = styled(NavLink)`
  ${font({Fmin: 32, Fmax: 48})}

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  &.active {
    color: ${myTheme.colors.fontWhite}
    font-weight: 500;
  }

  span {
    color: ${myTheme.colors.mainPurpleColor}
  }
`

const StyledLanguage = styled.select`
  ${font({Fmin: 32, Fmax: 48, weight: 600})}
  width: fit-content;
  background-color: ${myTheme.colors.primaryBg};
  border-color: transparent;
`