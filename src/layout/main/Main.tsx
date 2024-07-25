import React from 'react';
import styled from "styled-components";
import {Skills} from "./mainParts/skills/Skills";
import { AboutMe } from './mainParts/aboutMe/AboutMe';
import { Contacts } from './mainParts/contacts/Contacts';
import { Introduce } from './mainParts/introduce/Introduce';
import { Projects } from './mainParts/projects/Projects';
import {Quote} from "../../components/blockquote/Quote";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Introduce/>
                <Quote/>
                <Projects/>
                <Skills/>
                <AboutMe/>
                <Contacts/>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
`

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  //border: red solid 1px;
`
