import React from 'react';
import styled from 'styled-components';

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="/home"><span>#</span>home</a>
                </li>
                <li>
                    <a href="/works"><span>#</span>works</a>
                </li>
                <li>
                    <a href="/about-me"><span>#</span>about-me</a>
                </li>
                <li>
                    <a href="/contacts"><span>#</span>contacts</a>
                </li>
                <li>
                    <select name={"language"}>
                        <option>EN</option>
                        <option>RU</option>
                    </select>
                </li>
            </ul>
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