import React from 'react';
import styled from 'styled-components';
import {myTheme} from "../../styles/Theme.styled";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledMenuList>
                <Menuitem>
                    <a href="/home"><span>#</span>home</a>
                </Menuitem>
                <Menuitem>
                    <a href="#works"><span>#</span>works</a>
                </Menuitem>
                <Menuitem>
                    <a href="#about-me"><span>#</span>about-me</a>
                </Menuitem>
                <Menuitem>
                    <a href="#contacts"><span>#</span>contacts</a>
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