import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {myTheme} from "../../../../../styles/Theme.styled";
import {ContactResource} from "../../../../../components/contact/ContactResource";
import {Container} from "../../../../../components/Container";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {StyledLine} from "../../../../../styles/line/Line";
import {font} from "../../../../../styles/Common";

export const ContactsHome = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper align={"center"}>
                    <BaseTitle titleText={"contacts"}/>
                    <StyledLine lineWidth={"127px"}></StyledLine>
                </FlexWrapper>
                <StyledAboutMeContent justify={"space-between"} wrap={"wrap"}>
                    <Text>I’m interested in freelance opportunities.
                        However, if you have other request or question,
                        don’t hesitate to contact me
                    </Text>
                    <StyledContactBox direction={"column"}>
                        <MessageTitle>Message me here</MessageTitle>
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
  @media (max-width: 803px) {
    justify-content: center;
  }
  
  margin-top: 25px;
  gap: 25px;
`

const ContactBoxWrapper = styled(FlexWrapper)`
  padding: 8px;
  gap: 8px;
`

const StyledContactBox = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  padding: 10px;
`

const Text = styled.p`
  ${font({color: myTheme.colors.lightGrey, weight: 400, Fmin: 16, Fmax: 16})};
  max-width: 550px;
`

const MessageTitle = styled.h3`
  ${font({color: myTheme.colors.fontWhite, weight: 600, Fmin: 16, Fmax: 16})};
`