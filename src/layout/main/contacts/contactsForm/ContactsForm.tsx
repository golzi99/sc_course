import React, {ElementRef, useRef} from 'react';
import {StyledButton} from "../../../../styles/buttons/BaseButton";
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import { font } from '../../../../styles/Common';
import emailjs from '@emailjs/browser';

export const ContactsForm = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_w3aqfk9', 'template_u659tsl', form.current, {
                publicKey: 'j2UjtoQ28N4qgp9eI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset();
    };


    return (
        <StyledFiledSet>
            <legend>Text me your questions!</legend>
            <StyledFrom ref={form} onSubmit={sendEmail}>
                <FieldsWrapper>
                    <Field required placeholder={"Name"} name={"user_name"}/>
                    <Field required placeholder={"Email"} type={"email"} name={"email"}/>
                </FieldsWrapper>
                <Field required placeholder={"Title"} name={"title"}/>
                <Field required as={"textarea"} placeholder={"Message"} name={"message"}/>
                <StyledButton type={"submit"}>Send</StyledButton>
            </StyledFrom>
        </StyledFiledSet>
    );
};

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
    ${font({})}
  }
  
  &:focus-visible {
    outline: 1px solid ${myTheme.colors.mainPurpleColor};
  }
`