import React from 'react';
import styled from "styled-components";
import line from "../../../../assets/images/Line 7 (Stroke).svg";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {myTheme} from "../../../../styles/Theme.styled";
import {Icon} from "../../../../components/icon/Icon";

export const Contacts = () => {
    return (
        <StyledContacts>
            <StyledTitleSection direction={"row"}>
                <p><span>#</span>contacts</p>
                <img src={line} alt={"line"}/>
            </StyledTitleSection>
            <FlexWrapper direction={"row"} justify={"space-between"}>
                <StyledText>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                    hesitate to contact me</StyledText>
                <StyledContactBox direction={"column"}>
                    <StyledContactTextTitle>Message me here</StyledContactTextTitle>
                    <FlexWrapper>
                        <Icon iconId={"discordSvg"}></Icon>
                        <StyledText>!Elias#3519</StyledText>
                    </FlexWrapper>
                    <FlexWrapper>
                        <Icon iconId={"emailSvg"}></Icon>
                        <StyledText>elias@elias.me</StyledText>
                    </FlexWrapper>
                </StyledContactBox>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContactTextTitle = styled.p`
  color: ${myTheme.colors.white}
`

const StyledContacts = styled.section`
  background-color: #282C33;
  margin-top: 5vh;
`

const StyledTitleSection = styled(FlexWrapper)`
  color: ${myTheme.colors.white};
  font-size: 32px;
  font-weight: 500;

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
  max-width: 25%;
  font-weight: 400;
  font-size: 16px;
`