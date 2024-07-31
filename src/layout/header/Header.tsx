import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "./menu/HeaderMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import { myTheme } from '../../styles/Theme.styled';
import { Container } from '../../components/Container';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledWrapperHeader justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu/>
                    <MenuBurger>
                        ☰
                    </MenuBurger>
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
  padding: 0 8px;
`

const MenuBurger = styled.div`
  display: none;

  @media ${myTheme.media.tablet} {
    display: block;
  }
`
