import React from 'react';
import {FirstPart} from "../../components/mainParts/projects/FirstPart";
import {Projects} from "../../components/mainParts/projects/Projects";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledFirstPart>
            <FirstPart/>
            <Projects/>
        </StyledFirstPart>
    );
};

const StyledFirstPart = styled.main`
  background-color: #282C33;
`