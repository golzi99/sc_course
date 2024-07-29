import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import { myTheme } from '../../styles/Theme.styled';
import { Container } from '../../components/Container';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu/>
                    <MenuBurger>
                        ☰
                    </MenuBurger>
                </FlexWrapper>
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

const MenuBurger = styled.div`
  display: none;

  @media ${myTheme.media.tablet} {
    display: block;
  }
`
