import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {StyledBaseText, StyledWhiteText} from "../../../../styles/texts/Texts";
import {ContactResource} from "../../../../components/contact/ContactResource";
import {myTheme} from "../../../../styles/Theme.styled";
import {StyledButton} from "../../../../styles/buttons/BaseButton";

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
                                <ContactResource iconContact={"discordSvg"}
                                                 contactName={"!Elias#3519"}></ContactResource>
                                <ContactResource iconContact={"emailSvg"}
                                                 contactName={"elias@elias.me"}></ContactResource>
                            </ContactBoxWrapper>
                        </StyledContactBox>
                    </StyledContactsInfo>
                </StyledWrapper>
                <StyledFiledSet>
                    <legend>Text me your questions</legend>
                    <StyledFrom>
                        <FieldsWrapper>
                            <Field placeholder={"Name"}/>
                            <Field placeholder={"Email"} type={"email"}/>
                        </FieldsWrapper>
                        <Field placeholder={"Title"}/>
                        <Field as={"textarea"} placeholder={"Message"}/>
                        <StyledButton type={"submit"}>Send</StyledButton>
                    </StyledFrom>
                </StyledFiledSet>
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
  margin-bottom: 24px;
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

const FieldsWrapper = styled(FlexWrapper)`
  gap: 16px;
`

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 570px;
  width: 100%;
  gap: 16px;
  
  textarea {
    resize: none;
    height: 119px;
  }
`

const StyledFiledSet = styled.fieldset`
  max-width: 569px;
  padding: 16px;
  margin: 0 auto;
`

const Field = styled.input`
  width: 100%;
  background-color: ${myTheme.colors.primaryBg};
  border: ${myTheme.colors.lightGrey} solid 1px;
  padding: 8px;
  color: ${myTheme.colors.fontWhite};
  
  &::placeholder {
    color: ${myTheme.colors.lightGrey};
  }
  
  &:focus-visible {
    outline: 1px solid ${myTheme.colors.mainPurpleColor};
  }
  
  
`