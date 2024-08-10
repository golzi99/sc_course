import React from 'react';
import styled from "styled-components";
import {Introduce} from "./homeParts/introduce/Introduce";
import {ProjectsHome} from "./homeParts/projects/ProjectsHome";
import {Skills} from "./homeParts/skills/Skills";
import {AboutMeHome} from "./homeParts/aboutMe/AboutMeHome";
import {ContactsHome} from "./homeParts/contacts/ContactsHome";
import {Particle} from "../../../components/partical/Particle";
// import {myTheme} from "../../../styles/Theme.styled";

export const Home = () => {
    return (
        <StyledHome>
            <Particle/>
            <Introduce/>
            <ProjectsHome/>
            <Skills/>
            <AboutMeHome/>
            <ContactsHome/>
            {/*<StyledCube width={"91px"} height={"91px"} top={"672px"} left={"1600px"}/>*/}
        </StyledHome>
    );
};

const StyledHome = styled.div`
`

// const StyledCube = styled.div<{top?: string, left?: string, width?: string, height?: string}>`
//   position: fixed;
//   border: ${myTheme.colors.lightGrey} 1px solid;
//   top: ${props => props.top || "0"};
//   left: ${props => props.left || "0"};
//   width: ${props => props.width || "64px"};
//   height: ${props => props.height || "64px"};
// `