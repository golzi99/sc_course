import React from 'react';
import {Container} from "../../../../../components/Container";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {font} from "../../../../../styles/Common";
import {myTheme} from "../../../../../styles/Theme.styled";

export const TitleAboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <TitleWrapper direction={"column"}>
                    <BaseTitle titleText={"about-me"} symbolTitle={"/"}/>
                    <WhiteText>Who am i?</WhiteText>
                </TitleWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  margin-top: 48px;
`

const TitleWrapper = styled(FlexWrapper)`
  gap: 20px;
`

const WhiteText = styled.p`
  ${font({color: myTheme.colors.fontWhite})}
`
