import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const Quote = () => {
    return (
        <StyledQuote>
            <p>With great power comes great electricity bill</p>
            <cite>- Dr. Who</cite>
        </StyledQuote>
    );
};

const StyledQuote = styled.blockquote`
  color: ${myTheme.colors.fontWhite};
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  p {
    position: relative;
    font-size: 24px;
    font-weight: 500;
    padding: 30px;
    border: 1px solid ${myTheme.colors.lightGrey};
    margin: 0;

    &:before {
      content: "\\201C";
      position: absolute;
      font-size: 3em;
      top: 20px;
      line-height: 0;
      background-color: ${myTheme.colors.primaryBg};
    }

    &:after {
      content: "\\201D";
      position: absolute;
      bottom: -23px;
      right: 10px;
      font-size: 3em;
      line-height: 0;
      background-color: ${myTheme.colors.primaryBg};
    }

  }

  cite {
    border: 1px solid ${myTheme.colors.lightGrey};
    display: flex;
    justify-content: end;
    padding: 15px;
    font-size: 24px;
    font-weight: 500;
    width: fit-content;
    align-self: self-end;
    color: ${myTheme.colors.fontWhite};
  }
`