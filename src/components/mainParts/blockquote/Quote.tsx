import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {myTheme} from "../../../styles/Theme.styled";

export const Quote = () => {
    return (
        <FlexWrapper justify={"center"}>
            <StyledQuote>
                <p>With great power comes great electricity bill</p>
                <cite>- Dr. Who</cite>
            </StyledQuote>
        </FlexWrapper>
    );
};

const StyledQuote = styled.blockquote`
  margin-top: 5vh;
  color: ${myTheme.colors.white};
  
  p {
    font-size: 24px;
    font-weight: 500;
    padding: 15px;
    border: 1px solid ${myTheme.colors.lightGrey};
    margin: 0;

    &:before {
      content: "\\201C";
      position: relative;
      top: -40px;
      font-size: 3em;
      line-height: 1;
      background-color: ${myTheme.colors.mainBack};
    }

    &:after {
      content: "\\201D";
      position: relative;
      right: -10px;
      bottom: -65px;
      font-size: 3em;
      line-height: 1;
      background-color: ${myTheme.colors.mainBack};
    }    
    
  }
  
  cite {
    border: 1px solid ${myTheme.colors.lightGrey};
    display: flex;
    justify-content: end;
    padding: 15px;
    font-size: 24px;
    font-weight: 500;
    color: ${myTheme.colors.white};
  }
`
