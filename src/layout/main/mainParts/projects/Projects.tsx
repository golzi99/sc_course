import React from 'react';
import styled from 'styled-components';
import line from "../../../assets/images/Line 7 (Stroke).svg"
import projectImg1 from "../../../assets/images/banner1.webp"
import projectImg2 from "../../../assets/images/thumbnail1.webp"
import projectImg3 from "../../../assets/images/banner2.webp"
import {CardProject} from "./card/CardProject";
import { FlexWrapper } from '../../../../components/FlexWrapper';

const tools1: Array<string> = [
    "HTML", "SCSS", "Python", "Flask"
];

const tools2: Array<string> = [
    "React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"
];

const tools3: Array<string> = [
    "CSS", "Express", "Node.js"
];

export const Projects = () => {
    return (
        <StyledProject>
            <FlexWrapper direction={"row"} align={"center"} justify={"space-around"}>
                <h2><span>#</span>projects</h2>
                <img src={line} alt={"line"}/>
                <p>View all ~~&gt;</p>
            </FlexWrapper>
            <StyledProjectsFlexBox direction={"row"} justify={"center"} wrap={"wrap"}>
                <CardProject img={projectImg1} projectTools={tools1}
                             h2text={"ChertNodes"} description={"Minecraft servers hosting"}></CardProject>
                <CardProject img={projectImg2} projectTools={tools2}
                             h2text={"ProtectX"} description={"Discord anti-crash bot"}></CardProject>
                <CardProject img={projectImg3} projectTools={tools3}
                             h2text={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}></CardProject>
            </StyledProjectsFlexBox>
        </StyledProject>
    );
};

const StyledProject = styled.section`
  background-color: #282C33;

  p, h2 {
    color: #FFFFFF;

    span {
      color: #C778DD;
    }
  }
`

const StyledProjectsFlexBox = styled(FlexWrapper)`
  gap: 50px;
  min-height: 100vh;
  min-width: 75vw;
`