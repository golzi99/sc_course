import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {myTheme} from "../../../../styles/Theme.styled";
import {Icon} from "../../../../components/icon/Icon";

export const Contacts = () => {
    return (
        <StyledContacts>
            <StyledTitleSection direction={"row"} align={"center"}>
                <p><span>#</span>contacts</p>
                <StyledLine></StyledLine>
            </StyledTitleSection>
            <StyledContactBoxSection direction={"row"} justify={"space-between"}>
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
            </StyledContactBoxSection>
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
  gap: 20px;
  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledContactBoxSection = styled(FlexWrapper)`
    padding-top: 30px;
`

const StyledContactBox = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  padding: 10px;
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  max-width: 25%;
  font-weight: 400;
  font-size: 24px;
`

const StyledLine = styled.span`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 25vw;
  height: 2px;
`