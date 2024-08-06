import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ContactResource} from "../../../../components/contact/ContactResource";
import {myTheme} from "../../../../styles/Theme.styled";
import {ContactsForm} from "../contactsForm/ContactsForm";
import {font} from "../../../../styles/Common";

export const ContactsContent = () => {
    return (
        <StyledContents>
            <Container>
                <StyledWrapper justify={"space-between"} wrap={"wrap"}>
                    <Text>
                        I’m interested in freelance opportunities.
                        However, if you have other request or question,
                        don’t hesitate to contact me
                    </Text>
                    <StyledContactsInfo wrap={"wrap"}>
                        <SupBox direction={"column"}>
                            <WhiteText>Support me here</WhiteText>
                            <Text>4149500120690030</Text>
                        </SupBox>
                        <StyledContactBox direction={"column"}>
                            <WhiteText>Message me here</WhiteText>
                            <ContactBoxWrapper direction={"column"}>
                                <ContactResource iconContact={"discordSvg"}
                                                 contactName={"!Elias#3519"}></ContactResource>
                                <ContactResource iconContact={"emailSvg"}
                                                 contactName={"elias@elias.me"}></ContactResource>
                            </ContactBoxWrapper>
                        </StyledContactBox>
                    </StyledContactsInfo>
                </StyledWrapper>
                <ContactsForm></ContactsForm>
            </Container>
        </StyledContents>
    );
};

const StyledContents = styled.section`
`

const StyledWrapper = styled(FlexWrapper)`
  @media (max-width: 937px) {
    justify-content: center;
  }
  
  gap: 20px;
  margin-bottom: 24px;
`

const StyledContactsInfo = styled(FlexWrapper)`
  gap: 8px;
  
  @media ${myTheme.media.mobile} {
    flex-direction: column;
  }
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

const Text = styled.p`
  ${font({Fmin: 16, Fmax: 16})};
  max-width: 505px;
`

const WhiteText = styled.p`
  ${font({color: myTheme.colors.fontWhite})}
`