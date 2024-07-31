import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {CardProject} from "../../../home/homeParts/projects/card/CardProject";
import projectImg1 from "../../../../../assets/images/banner1.webp";
import projectImg2 from "../../../../../assets/images/thumbnail1.webp";
import projectImg3 from "../../../../../assets/images/banner2.webp";
import projectImg4 from "../../../../../assets/images/thumbnail2.webp";
import projectImg5 from "../../../../../assets/images/Portfolio.webp";
import {CardProjectType} from "../../../../../types/types";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";

const tools1: Array<string> = [
    "HTML", "SCSS", "Python", "Flask"
];

const tools2: Array<string> = [
    "React", "Express", "Discord.js", "Node.js"
];

const tools3: Array<string> = [
    "CSS", "Express", "Node.js"
];

const tools4: Array<string> = [
    "HTML", "CSS", "JS"
];

const tools5: Array<string> = [
    "Vue", "TS", "Less"
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
        img: projectImg3,
        title: "Kahoot Answers Viewer",
        projectTools: tools3,
        description: "Get answers to your kahoot quiz",
        projectSource: "Live &lt;~&gt;",
    },
    {
        img: projectImg2,
        title: "ProtectX",
        projectTools: tools2,
        description: "Discord anti-crash bot",
        cachedButton: "Cached =&gt;",
    },
    {
        img: projectImg4,
        title: "Kotik Bot",
        projectTools: tools4,
        description: "Multi-functional discord bot",
        projectSource: "Live &lt;~&gt;"
    },
    {
        img: projectImg5,
        title: "Portfolio",
        projectTools: tools5,
        description: "You’re using it rn",
        projectSource: "Github &lt;~&gt;",
    }
]

export const CompleteApps = () => {
    return (
        <StyledCompleteApps>
            <Container>
                <StyledAppsWrapper direction={"column"}>
                    <BaseTitle titleText={"complete-apps"}/>
                    <StyledProjectsFlexBox justify={"flex-start"} wrap={"wrap"}>
                        {Card.map((card, index) => {
                            return <CardProject key={index} img={card.img} title={card.title}
                                                description={card.description}
                                                projectTools={card.projectTools}
                                                projectSource={card.projectSource}
                                                cachedButton={card.cachedButton}
                            />
                        })}
                    </StyledProjectsFlexBox>
                </StyledAppsWrapper>
            </Container>
        </StyledCompleteApps>
    );
};

const StyledCompleteApps = styled.section`
`

const StyledAppsWrapper = styled(FlexWrapper)`
  gap: 30px;
`

const StyledProjectsFlexBox = styled(FlexWrapper)`
  padding-top: 10px;
  gap: 10px;
`