import React from 'react';
import styled from "styled-components";
import {Skills} from "./mainParts/skills/Skills";
import { AboutMe } from './mainParts/aboutMe/AboutMe';
import { Contacts } from './mainParts/contacts/Contacts';
import { Introduce } from './mainParts/introduce/Introduce';
import { Projects } from './mainParts/projects/Projects';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Introduce/>
                <Projects/>
                <Skills/>
            </Container>
        </StyledMain>
    );
};

// как правильно сделать размеры элементов в контейнере и правильно сделать между ними отступы

const StyledMain = styled.main`
  background-color: #282C33;
`

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  //border: red solid 1px;
  margin: 0 auto;
`

//                 <Skills/>
//                 <AboutMe/>
//                 <Contacts/>