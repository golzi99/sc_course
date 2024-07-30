import React from 'react';
import styled from "styled-components";
import {ProjectsTitle} from "./projectParts/projectsTitle/ProjectsTitle";
import {CompleteApps} from "./projectParts/complete-apps/CompleteApps";
import {SmallProjects} from "./projectParts/small-projects/SmallProjects";

export const Projects = () => {
    return (
        <StyledProjects>
            <ProjectsTitle/>
            <CompleteApps/>
            <SmallProjects/>
        </StyledProjects>
    );
};

const StyledProjects = styled.div`

`