import React from 'react';
import styled from 'styled-components';
import {myTheme} from "../../../styles/Theme.styled";
import {NavLink} from "react-router-dom";

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
                <select name={"language"}>
                    <option>EN</option>
                    <option>RU</option>
                </select>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }

  @media ${myTheme.media.tablet} {
    display: none;
  }
  
`

const Menuitem = styled.li`
`

const StyledNav = styled(NavLink)`
  color: ${myTheme.colors.lightGrey};

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  &.active {
    color: ${myTheme.colors.fontWhite}
  }

  span {
    color: ${myTheme.colors.mainPurpleColor}
  }
`