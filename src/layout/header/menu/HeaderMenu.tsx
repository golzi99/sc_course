import React from 'react';
import styled from 'styled-components';
import {myTheme} from "../../../styles/Theme.styled";
import {NavLink} from "react-router-dom";
import {font} from "../../../styles/Common";

export const HeaderMenu = () => {
    return (
        <StyledMenu>
            <ul>
                <Menuitem>
                    <StyledNav to="/"><span>#</span>home</StyledNav>
                </Menuitem>
                <Menuitem>
                    <StyledNav to="/projects"><span>#</span>works</StyledNav>
                </Menuitem>
                <Menuitem>
                    <StyledNav to="/about-me"><span>#</span>about-me</StyledNav>
                </Menuitem>
                <Menuitem>
                    <StyledNav to="/contacts"><span>#</span>contacts</StyledNav>
                </Menuitem>
                <StyledLanguage name={"language"}>
                    <option>EN</option>
                    <option>RU</option>
                </StyledLanguage>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

const Menuitem = styled.li`
`

const StyledNav = styled(NavLink)`
  ${font({Fmin: 16, Fmax: 16})};
  transition: ${myTheme.animations.transition};

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  &.active {
    ${font({color: myTheme.colors.fontWhite, weight: 500})};
  }

  span {
    color: ${myTheme.colors.mainPurpleColor}
  }
`

const StyledLanguage = styled.select`
  ${font({Fmin: 16, Fmax: 16, weight: 600})}
  width: fit-content;
  background-color: ${myTheme.colors.primaryBg};
  border-color: transparent;
`