import React from 'react';
import styled from 'styled-components';
import projectImg1 from "../../../../../assets/images/banner1.webp"
import projectImg2 from "../../../../../assets/images/thumbnail1.webp"
import projectImg3 from "../../../../../assets/images/banner2.webp"
import {CardProject} from "./card/CardProject";
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { myTheme } from '../../../../../styles/Theme.styled';

const tools1: Array<string> = [
    "HTML", "SCSS", "Python", "Flask"
];

const tools2: Array<string> = [
    "React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"
];

const tools3: Array<string> = [
    "CSS", "Express", "Node.js"
];

// правильно ли задан flex у карточек, правильно ли переходит wrap или есть более оптимальный способ.

export const ProjectsHome = () => {
    return (
        <StyledProject>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <FlexWrapper align={"center"}>
                    <StyledTitle><span>#</span>projects</StyledTitle>
                    <StyledLine></StyledLine>
                </FlexWrapper>
                <StyledView href={"/projects"}>View all ~~&gt;</StyledView>
            </FlexWrapper>
            <StyledProjectsFlexBox justify={"center"} wrap={"wrap"}>
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
`

const StyledTitle = styled.h2`
  font-size: 32px;
  color: ${myTheme.colors.white};
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
  padding-top: 25px;
  gap: 10px;
`

const StyledLine = styled.span`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 500px;
  height: 1px;
  margin-left: 20px;
`