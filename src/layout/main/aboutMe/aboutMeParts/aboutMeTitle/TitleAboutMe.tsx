import React from 'react';
import {Container} from "../../../../../components/Container";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {StyledWhiteText} from "../../../../../styles/texts/Texts";
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const TitleAboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <TitleWrapper direction={"column"}>
                    <BaseTitle titleText={"about-me"} symbolTitle={"/"}/>
                    <StyledWhiteText>Who am i?</StyledWhiteText>
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
