import React from 'react';
import styled from 'styled-components';
import projectImg1 from "../../../../assets/images/banner1.webp"
import projectImg2 from "../../../../assets/images/thumbnail1.webp"
import projectImg3 from "../../../../assets/images/banner2.webp"
import {CardProject} from "./card/CardProject";
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { myTheme } from '../../../../styles/Theme.styled';

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
        <StyledProject id={"works"}>
            <FlexWrapper direction={"row"} align={"center"} justify={"space-between"}>
                <StyledTitle direction={"row"} align={"center"}>
                    <p><span>#</span>projects</p>
                    <StyledLine></StyledLine>
                </StyledTitle>
                <StyledView href={"/projects"}>View all ~~&gt;</StyledView>
            </FlexWrapper>
            <StyledProjectsFlexBox direction={"row"} justify={"space-around"} wrap={"wrap"}>
                <CardProject img={projectImg1} projectTools={tools1} cachedVisible={true}
                             h2text={"ChertNodes"} description={"Minecraft servers hosting"}></CardProject>
                <CardProject img={projectImg2} projectTools={tools2} cachedVisible={false}
                             h2text={"ProtectX"} description={"Discord anti-crash bot"}></CardProject>
                <CardProject img={projectImg3} projectTools={tools3} cachedVisible={false}
                             h2text={"Kahoot Answers Viewer"}
                             description={"Get answers to your kahoot quiz"}></CardProject>
            </StyledProjectsFlexBox>
        </StyledProject>
    );
};

const StyledProject = styled.section`
  background-color: ${myTheme.colors.mainBack};
  min-height: 60vh;
`

const StyledTitle = styled(FlexWrapper)`
  color: ${myTheme.colors.white};
  font-size: 32px;
  font-weight: 500;
  gap: 20px;
  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledView = styled.a`
  color: ${myTheme.colors.white};
  font-size: 24px;
  text-decoration: none;
`

const StyledProjectsFlexBox = styled(FlexWrapper)`
  padding: 1%;
  width: 100%;
  gap: 20px;
`

const StyledLine = styled.span`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 25vw;
  height: 2px;
`