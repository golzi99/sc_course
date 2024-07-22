import React from 'react';
import dark_man_1 from "../../../../assets/images/dark_man_1.webp"
import styled from "styled-components";
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const FirstPart = () => {
    return (
        <FlexWrapper justify={"space-around"} align={"center"}>
            <StyledTextBox direction={"column"}>
                <StyledTitle>
                    Elias is a <span>web designer</span> and <span>front-end developer</span>
                </StyledTitle>
                <StyledDescription>
                    He crafts responsive websites where technologies meet creativity
                </StyledDescription>
                <StyledButton>Contact me !!</StyledButton>
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
    );
};


const Photo = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
`

const StyledButton = styled.a`
  padding: 8px 16px 8px 16px;
  border: #C778DD solid 1px;
  background-color: transparent;
  color: white;
  width: fit-content;
  font-size: 18px;
`

const StyledTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #FFFFFF;

  span {
    color: #C778DD;
  }
`

const StyledDescription = styled.p`
  color: #ABB2BF;
  font-size: 24px;
`

const StyledTextBox = styled(FlexWrapper)`
    gap: 20px;
`

const BoxUnderImage = styled(FlexWrapper)`
  border: lightgrey solid 1px;
  //width: 20vw;
  //height: 4vh;
  gap: 1vw;
  padding-left: 1vw;
  padding-right: 1vw;
`

const StyledCurrentActivity = styled.div`
  color: #ABB2BF;
  font-size: 24px;
  font-weight: 600;
`

const StyledIndicator = styled.p`
  border: 1px solid #C778DD;
  width: 16px;
  height: 16px;
  flex-direction: row;
  background-color: #C778DD;
`