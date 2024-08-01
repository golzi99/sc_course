import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {myTheme} from "../../../../../styles/Theme.styled";
import {ContactResource} from "../../../../../components/contact/ContactResource";
import {Container} from "../../../../../components/Container";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {StyledLine} from "../../../../../styles/line/Line";
import {StyledBaseText, StyledWhiteText} from "../../../../../styles/texts/Texts";

export const ContactsHome = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper align={"center"}>
                    <BaseTitle titleText={"contacts"}/>
                    <StyledLine></StyledLine>
                </FlexWrapper>
                <StyledAboutMeContent justify={"space-between"} wrap={"wrap"}>
                    <StyledMaxWidthText>I’m interested in freelance opportunities.
                        However, if you have other request or question,
                        don’t hesitate to contact me
                    </StyledMaxWidthText>
                    <StyledContactBox direction={"column"}>
                        <StyledWhiteText>Message me here</StyledWhiteText>
                        <ContactBoxWrapper direction={"column"}>
                            <ContactResource iconContact={"discordSvg"} contactName={"!Elias#3519"}></ContactResource>
                            <ContactResource iconContact={"emailSvg"} contactName={"elias@elias.me"}></ContactResource>
                        </ContactBoxWrapper>
                    </StyledContactBox>
                </StyledAboutMeContent>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
`

const StyledAboutMeContent = styled(FlexWrapper)`
  margin-top: 25px;
  gap: 25px;
  @media (max-width: 803px) {
    justify-content: center;
  }
`

const ContactBoxWrapper = styled(FlexWrapper)`
  padding: 8px;
  gap: 8px;
`

const StyledContactBox = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  padding: 10px;
`

const StyledMaxWidthText = styled(StyledBaseText)`
  max-width: 550px;
`