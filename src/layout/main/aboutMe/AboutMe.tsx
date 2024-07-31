import React from 'react';
import styled from "styled-components";
import {TitleAboutMe} from "./aboutMeParts/aboutMeTitle/TitleAboutMe";
import {AboutMeIntroduce} from "./aboutMeParts/aboutMeIntroduce/AboutMeIntroduce";
import {SkillsAboutMe} from "./aboutMeParts/aboutMeSkills/SkillsAboutMe";
import {FactsAboutMe} from "./aboutMeParts/aboutMeFacts/FactsAboutMe";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <TitleAboutMe/>
            <AboutMeIntroduce/>
            <SkillsAboutMe/>
            <FactsAboutMe/>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.div`
    
`