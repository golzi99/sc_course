import React from 'react';
import dark_man_1 from "../../assets/images/dark_man_1.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <StyledDescription>Elias is a <span>web designer</span> and <span>front-end developer</span></StyledDescription>
                    <StyledSmallDescription>He crafts responsive websites where technologies meet creativity</StyledSmallDescription>
                    <div>
                        <StyledButton>Contact me !!</StyledButton>
                    </div>
                </div>
                <FlexWrapper align={"center"} direction={"column"}>
                    <Photo src={dark_man_1} alt={"dark_man_1"}/>
                    <FlexWrapper>
                        <StyledIndicator></StyledIndicator>
                        <StyledCurrentActivity>
                            Currently working on <span>Portfolio</span>
                        </StyledCurrentActivity>
                    </FlexWrapper>
                </FlexWrapper>

            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.main`
  background-color: #282C33;
`

const Photo = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
`

const StyledButton = styled.button`
  padding: 8px 16px 8px 16px;
  border: #C778DD solid 1px;
  background-color: transparent;
  color: white;
`

const StyledDescription = styled.h2`
  color: #FFFFFF;
  
  span {
    color: #C778DD;
  }
`

const StyledSmallDescription = styled.div`
  color: #ABB2BF;
`

const StyledCurrentActivity = styled.div`
  color: #ABB2BF;
  font-size: 16px;
  font-weight: 600;
`

const StyledIndicator = styled.div`
  border: 1px solid #C778DD;
  width: 16px;
  height: 16px;
  flex-direction: row;
  background-color: #C778DD;
`