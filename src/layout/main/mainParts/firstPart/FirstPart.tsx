import React from 'react';
import dark_man_1 from "../../../../assets/images/dark_man_1.webp"
import styled from "styled-components";
import { FlexWrapper } from '../../../../components/FlexWrapper';
import {myTheme} from "../../../../styles/Theme.styled";
import {Quote} from "../../../../components/mainParts/blockquote/Quote";

export const FirstPart = () => {
    return (
        <StyledFirstPart>
            <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
                <StyledTextBox direction={"column"}>
                    <StyledTitle>
                        Elias is a <span>web designer</span> and <span>front-end developer</span>
                    </StyledTitle>
                    <StyledDescription>
                        He crafts responsive websites where technologies meet creativity
                    </StyledDescription>
                    <StyledButton href={"/contacts"}>Contact me !!</StyledButton>
                </StyledTextBox>
                <FlexWrapper align={"center"} direction={"column"}>
                    <Photo src={dark_man_1} alt={"dark_man_1"}/>
                    <BoxUnderImage align={"center"}>
                        <StyledIndicator/>
                        <StyledCurrentActivity>
                            Currently working on <strong>Portfolio</strong>
                        </StyledCurrentActivity>
                    </BoxUnderImage>
                </FlexWrapper>
            </FlexWrapper>
            <Quote/>
        </StyledFirstPart>
    );
};

const StyledFirstPart = styled.section`
  background-color: ${myTheme.colors.mainBack};
  min-height: 75vh;
`

const Photo = styled.img`
  max-width: 30vw;
  max-height: 50vw;
  object-fit: cover;
`

const StyledButton = styled.a`
  padding: 8px 16px 8px 16px;
  border: ${myTheme.colors.mainPurpleColor} solid 1px;
  background-color: transparent;
  color: ${myTheme.colors.white};
  width: fit-content;
  font-size: 18px;
  text-decoration: none;
  
  &:hover {
    background-color:rgba(199, 120, 221, 0.2);
    cursor: pointer;
  }
`

const StyledTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: ${myTheme.colors.white};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledDescription = styled.p`
  color: ${myTheme.colors.lightGrey};
  font-size: 24px;
`

const StyledTextBox = styled(FlexWrapper)`
    gap: 20px;
`

const BoxUnderImage = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  gap: 1vw;
  padding-left: 1vw;
  padding-right: 1vw;
`

const StyledCurrentActivity = styled.div`
  color: ${myTheme.colors.lightGrey};
  font-size: 24px;
  font-weight: 600;
`

const StyledIndicator = styled.p`
  border: 1px solid ${myTheme.colors.mainPurpleColor};
  width: 16px;
  height: 16px;
  flex-direction: row;
  background-color: ${myTheme.colors.mainPurpleColor};
`