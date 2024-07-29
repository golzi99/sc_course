import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {myTheme} from "../../../../../styles/Theme.styled";
import {ContactResource} from "../../../../../components/contact/ContactResource";
import {Container} from "../../../../../components/Container";

export const ContactsHome = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper align={"center"}>
                    <StyledTitle><span>#</span>contacts</StyledTitle>
                    <StyledLine></StyledLine>
                </FlexWrapper>
                <StyledAboutMeContent justify={"space-between"} wrap={"wrap"}>
                    <StyledText>I’m interested in freelance opportunities. However, if you have other request or question,
                        don’t hesitate to contact me
                    </StyledText>
                    <StyledContactBox direction={"column"}>
                        <StyledContactTextTitle>Message me here</StyledContactTextTitle>
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
  padding-top: 25px;
`

const ContactBoxWrapper = styled(FlexWrapper)`
  padding: 8px;
  gap: 8px;
`

const StyledTitle = styled.h2`
  font-size: 32px;
  color: ${myTheme.colors.fontWhite};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledContactBox = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  padding: 10px;
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  max-width: 550px;
  font-weight: 400;
  font-size: 16px;
`

const StyledContactTextTitle = styled.p`
  color: ${myTheme.colors.fontWhite};
  font-size: 16px;
  word-spacing: 5px;
  padding: 8px;
`


const StyledLine = styled.span`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 25vw;
  max-width: 500px;
  height: 1px;
  margin-left: 20px;
`