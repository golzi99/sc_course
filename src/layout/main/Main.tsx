import React from 'react';
import {FirstPart} from "../../components/mainParts/projects/FirstPart";
import {Projects} from "../../components/mainParts/projects/Projects";
import styled from "styled-components";
import {Skills} from "./mainParts/skills/Skills";

export const Main = () => {
    return (
        <StyledMain>
            <FirstPart/>
            <Projects/>
            <Skills/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  background-color: #282C33;
`