import React from 'react';
import styled from "styled-components";
import {Skills} from "./mainParts/skills/Skills";
import { AboutMe } from './mainParts/aboutMe/AboutMe';
import { Contacts } from './mainParts/contacts/Contacts';
import {Quote} from "../../components/mainParts/blockquote/Quote";
import { FirstPart } from './mainParts/firstPart/FirstPart';
import { Projects } from './mainParts/projects/Projects';

export const Main = () => {
    return (
        <StyledMain>
            <FirstPart/>
            <Quote/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  background-color: #282C33;
  padding: 0 10% 10% 10%;
`