import React from 'react';
import styled from 'styled-components';
import projectImg1 from "../../../../../assets/images/banner1.webp"
import projectImg2 from "../../../../../assets/images/thumbnail1.webp"
import projectImg3 from "../../../../../assets/images/banner2.webp"
import {CardProject} from "./card/CardProject";
import {FlexWrapper} from '../../../../../components/FlexWrapper';
import {myTheme} from '../../../../../styles/Theme.styled';
import {Container} from "../../../../../components/Container";
import {NavLink} from "react-router-dom";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {StyledLine} from "../../../../../styles/line/Line";
import {CardProjectType} from "../../../../../types/types";

const tools1: Array<string> = [
    "HTML", "SCSS", "Python", "Flask"
];

const tools2: Array<string> = [
    "React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"
];

const tools3: Array<string> = [
    "CSS", "Express", "Node.js"
];

const Card: Array<CardProjectType> = [
    {
        img: projectImg1,
        title: "ChertNodes",
        projectTools: tools1,
        description: "Minecraft servers hosting",
        projectSource: "Live &lt;~&gt;",
        cachedButton: "Cached =&gt;"
    },
    {
        img: projectImg2,
        title: "ProtectX",
        projectTools: tools2,
        description: "Discord anti-crash bot",
        projectSource: "Live &lt;~&gt;",
    },
    {
        img: projectImg3,
        title: "Kahoot Answers Viewer",
        projectTools: tools3,
        description: "Get answers to your kahoot quiz",
        projectSource: "Live &lt;~&gt;",
    }
]

export const ProjectsHome = () => {
    return (
        <StyledProject>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <FlexWrapper align={"center"}>
                            <BaseTitle titleText={"projects"}/>
                            <StyledLine lineWidth={"511px"} mediaStop={"892px"}></StyledLine>
                        </FlexWrapper>
                        <StyledView to={"/projects"}>View all ~~&gt;</StyledView>
                    </FlexWrapper>
                    <StyledProjectsFlexBox justify={"center"} wrap={"wrap"}>
                        {Card.map((card, index) => {
                            return <CardProject key={index} img={card.img} title={card.title}
                                                description={card.description}
                                                projectTools={card.projectTools}
                                                projectSource={card.projectSource}
                                                cachedButton={card.cachedButton}
                            />
                        })}
                    </StyledProjectsFlexBox>
                </FlexWrapper>
            </Container>
        </StyledProject>
    );
};

// как сделать переходы правильные или более красивые ?

const StyledProject = styled.section`
`

const StyledView = styled(NavLink)`
  color: ${myTheme.colors.fontWhite};
  font-size: 16px;
  text-decoration: none;
`

const StyledProjectsFlexBox = styled(FlexWrapper)`
  padding-top: 25px;
  gap: 10px;
`