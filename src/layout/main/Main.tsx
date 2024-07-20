import React from 'react';
import {FirstPart} from "../../components/mainParts/projects/FirstPart";
import {Projects} from "../../components/mainParts/projects/Projects";
import styled from "styled-components";
import {Skills} from "./mainParts/skills/Skills";
import { AboutMe } from './mainParts/aboutMe/AboutMe';
import { Contacts } from './mainParts/contacts/Contacts';

export const Main = () => {
    return (
        <StyledMain>
            <FirstPart/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  background-color: #282C33;
  padding-left: 10%;
  padding-right: 10%;
`