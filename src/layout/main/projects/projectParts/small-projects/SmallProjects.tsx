import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import { CardProjectType } from '../../../../../types/types';
import {CardProject} from "../../../home/homeParts/projects/card/CardProject";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";

const tools1: Array<string> = ["Discord.js", "TS", "JS"];

const tools2: Array<string> = ["Vue", "CSS", "JS"];

const tools3: Array<string> = ["Figma"];

const tools4: Array<string> = ["HTML", "CSS"];

const tools5: Array<string> = ["Lua", "NeoVim"];

const tools6: Array<string> = ["Python", "Quart", "HTML"];

const Card: Array<CardProjectType> = [
    {
        title: "Bot boilerplate",
        projectTools: tools1,
        description: "Start creating scalable discord.js bot with typescript in seconds",
        projectSource: "Github &lt;~&gt;"
    },
    {
        title: "My blog",
        projectTools: tools2,
        description: "Front-end of my future blog website written in vue",
        projectSource: "Github &lt;~&gt;"
    },
    {
        title: "Chess pro",
        projectTools: tools3,
        description: "Figma landing page about service for viewing chess tournaments",
        projectSource: "Figma &lt;~&gt;"
    },
    {
        title: "Crash protect website",
        projectTools: tools3,
        description: "Figma template for website about anti-raid, anti-crash discord bot",
        projectSource: "Figma &lt;~&gt;"
    },
    {
        title: "CSS experiments",
        projectTools: tools4,
        description: "Collection of my different little projects in css",
        projectSource: "Live &lt;~&gt;"
    },
    {
        title: "Web Dev nvim config",
        projectTools: tools5,
        description: "Config for neovim perfect for web developer",
        projectSource: "Github &lt;~&gt;"
    },
    {
        title: "Ooku",
        projectTools: tools6,
        description: "Simple link shortener with auth",
        projectSource: "Live &lt;~&gt;"
    },
    {
        title: "School website",
        projectTools: tools3,
        description: "Figma template website for my school",
        projectSource: "Figma &lt;~&gt;"
    }
]



export const SmallProjects = () => {
    return (
        <StyledSmallProjects>
            <Container>
                <StyledAppsWrapper direction={"column"}>
                    <BaseTitle titleText={"small-projects"}/>
                    <StyledProjectsFlexBox>
                        {Card.map((card, index) => {
                            return <CardProject key={index} title={card.title} description={card.description}
                                                projectTools={card.projectTools} projectSource={card.projectSource}/>
                        })}
                    </StyledProjectsFlexBox>
                </StyledAppsWrapper>
            </Container>
        </StyledSmallProjects>
    );
};

const StyledSmallProjects = styled.section`
`

const StyledAppsWrapper = styled(FlexWrapper)`
  gap: 30px;
`

const StyledProjectsFlexBox = styled(FlexWrapper)`
  gap: 10px;
  padding-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  
  //padding-top: 10px;
  //gap: 10px;
  //
  //@media (max-width: 1031px) {
  //  justify-content: center;
  //}
`