import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import { myTheme } from '../../styles/Theme.styled';
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  //border: red solid 1px;
  margin: 0 auto;
  padding: 20px;
`

const StyledHeader = styled.header`
  background-color: ${myTheme.colors.mainBack};
`
