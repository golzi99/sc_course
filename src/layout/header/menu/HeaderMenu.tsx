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

  @media ${myTheme.media.tablet} {
    display: none;
  }
  
`

const Menuitem = styled.li`
`

const StyledNav = styled(NavLink)`
  ${font({color: myTheme.colors.lightGrey, Fmin: 16, Fmax: 16, weight: 400})}

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  &.active {
    color: ${myTheme.colors.fontWhite};
    font-weight: 500;
  }

  span {
    color: ${myTheme.colors.mainPurpleColor}
  }
`

const StyledLanguage = styled.select`
  ${font({color: myTheme.colors.lightGrey, Fmin: 16, Fmax: 16, weight: 600})}
  width: fit-content;
  background-color: ${myTheme.colors.primaryBg};
  border-color: transparent;
`