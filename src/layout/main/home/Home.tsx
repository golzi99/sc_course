import React from 'react';
import styled from "styled-components";
import {Introduce} from "./homeParts/introduce/Introduce";
import {Quote} from "../../../components/blockquote/Quote";
import {ProjectsHome} from "./homeParts/projects/ProjectsHome";
import {Skills} from "./homeParts/skills/Skills";
import {AboutMeHome} from "./homeParts/aboutMe/AboutMeHome";
import {ContactsHome} from "./homeParts/contacts/ContactsHome";

export const Home = () => {
    return (
        <StyledHome>
            <Introduce/>
            <Quote/>
            <ProjectsHome/>
            <Skills/>
            <AboutMeHome/>
            <ContactsHome/>
        </StyledHome>
    );
};

const StyledHome = styled.div`

`