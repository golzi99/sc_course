import React from 'react';
import {Container} from "../../../../components/Container";
import styled from "styled-components";
import { BaseTitle } from '../../../../components/titles/BaseTitle';
import {StyledWhiteText} from '../../../../styles/texts/Texts';
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const TitleContacts = () => {
    return (
        <StyledContacts>
            <Container>
                <TitleWrapper direction={"column"}>
                    <BaseTitle titleText={"contacts"} symbolTitle={"/"}/>
                    <StyledWhiteText>Who am i?</StyledWhiteText>
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
