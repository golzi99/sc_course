import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {StyledBaseText, StyledWhiteText} from "../../../../styles/texts/Texts";
import {ContactResource} from "../../../../components/contact/ContactResource";
import {myTheme} from "../../../../styles/Theme.styled";

export const ContactsContent = () => {
    return (
        <StyledContents>
            <Container>
                <StyledWrapper justify={"space-between"} wrap={"wrap"}>
                    <TextBlock>
                        I’m interested in freelance opportunities.
                        However, if you have other request or question,
                        don’t hesitate to contact me
                    </TextBlock>
                    <StyledContactsInfo>
                        <SupBox direction={"column"}>
                            <StyledWhiteText>Support me here</StyledWhiteText>
                            <StyledBaseText>4149500120690030</StyledBaseText>
                        </SupBox>
                        <StyledContactBox direction={"column"}>
                            <StyledWhiteText>Message me here</StyledWhiteText>
                            <ContactBoxWrapper direction={"column"}>
                                <ContactResource iconContact={"discordSvg"} contactName={"!Elias#3519"}></ContactResource>
                                <ContactResource iconContact={"emailSvg"} contactName={"elias@elias.me"}></ContactResource>
                            </ContactBoxWrapper>
                        </StyledContactBox>
                    </StyledContactsInfo>
                </StyledWrapper>
            </Container>
        </StyledContents>
    );
};

const StyledContents = styled.section`
`

const StyledWrapper = styled(FlexWrapper)`
  @media (max-width: 917px) {
    justify-content: center;
    gap: 20px;
  }
`

const StyledContactsInfo = styled(FlexWrapper)`
    gap: 8px;
`

const SupBox = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  padding: 10px;
  gap: 8px;
`

const ContactBoxWrapper = styled(FlexWrapper)`
  padding: 8px;
  gap: 8px;
`

const StyledContactBox = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  padding: 10px;
`

const TextBlock = styled(StyledBaseText)`
  max-width: 505px;
`