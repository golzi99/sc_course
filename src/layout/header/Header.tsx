import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import { myTheme } from '../../styles/Theme.styled';

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
  padding: 20px 0;
`

const StyledHeader = styled.header`
  // @media ${myTheme.media.tablet} {
  //   flex-direction: column;
  // }
`
