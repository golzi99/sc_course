import React from 'react';
import styled from 'styled-components';
import {myTheme} from "../../styles/Theme.styled";
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledMenuList>
                <Menuitem>
                    <NavLink to="/home"><span>#</span>home</NavLink>
                </Menuitem>
                <Menuitem>
                    <NavLink to="/projects"><span>#</span>works</NavLink>
                </Menuitem>
                <Menuitem>
                    <NavLink to="/about-me"><span>#</span>about-me</NavLink>
                </Menuitem>
                <Menuitem>
                    <NavLink to="/contacts"><span>#</span>contacts</NavLink>
                </Menuitem>
                <Menuitem>
                    <select name={"language"}>
                        <option>EN</option>
                        <option>RU</option>
                    </select>
                </Menuitem>
            </StyledMenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    font-size: 24px;
    
    ul {
      display: flex;
      gap:30px;

      a {
        text-decoration: none;
      }
    }
`

const StyledMenuList = styled.ul`
  list-style: none;
`

const Menuitem = styled.li`
  a {
    color: ${myTheme.colors.white};
    text-decoration: none;
    span {
      color: ${myTheme.colors.mainPurpleColor}
    }
  }
`