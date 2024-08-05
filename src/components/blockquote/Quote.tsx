import React from 'react';
import styled from "styled-components";
import { font } from '../../styles/Common';
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
    ${font({color: myTheme.colors.fontWhite, Fmin: 24, Fmax:24, weight: 500})}
    position: relative;
    padding: 24px;
    border: 1px solid ${myTheme.colors.lightGrey};
    margin: 0;

    &:before {
      content: "\\201C";
      position: absolute;
      font-size: 3em;
      left: 0;
      top: 0.3em;
      line-height: 0;
      background-color: ${myTheme.colors.primaryBg};
    }

    &:after {
      content: "\\201D";
      position: absolute;
      bottom: -0.3em;
      right: 0;
      font-size: 3em;
      line-height: 0;
      background-color: ${myTheme.colors.primaryBg};
    }

  }

  cite {
    ${font({color: myTheme.colors.fontWhite, Fmin: 24, Fmax:24, weight: 400})}
    text-align: left;
    font-style: normal;

    border: 1px solid ${myTheme.colors.lightGrey};
    display: flex;
    justify-content: end;
    padding: 16px;
    width: fit-content;
    align-self: self-end;
  }
`