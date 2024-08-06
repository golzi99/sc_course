import React from 'react';
import {Container} from "../../../../components/Container";
import styled from "styled-components";
import { BaseTitle } from '../../../../components/titles/BaseTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import {font} from "../../../../styles/Common";
import {myTheme} from "../../../../styles/Theme.styled";

export const TitleContacts = () => {
    return (
        <StyledContacts>
            <Container>
                <TitleWrapper direction={"column"}>
                    <BaseTitle titleText={"contacts"} symbolTitle={"/"}/>
                    <WhiteText>Who am i?</WhiteText>
                </TitleWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  margin-top: 48px;
`

const TitleWrapper = styled(FlexWrapper)`
  gap: 20px;
`

const WhiteText = styled.p`
  ${font({color: myTheme.colors.fontWhite})}
`