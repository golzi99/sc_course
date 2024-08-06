import React from 'react';
import {StyledButton} from "../../../../styles/buttons/BaseButton";
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import { font } from '../../../../styles/Common';

export const ContactsForm = () => {
    return (
        <StyledFiledSet>
            <legend>Text me your questions!</legend>
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