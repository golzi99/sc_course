import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import { myTheme } from '../../../../../styles/Theme.styled';
import {CardProject} from "../../../home/homeParts/projects/card/CardProject";

const tools1: Array<string> = [
    "Discord.js", "TS", "JS"
];

const tools2: Array<string> = [
    "Vue", "CSS", "JS"
];

const tools3: Array<string> = [
    "Figma"
];

const tools4: Array<string> = [
    "HTML", "CSS"
];

const tools5: Array<string> = [
    "Lua", "NeoVim"
];

const tools6: Array<string> = [
    "Python", "Quart", "HTML"
];


export const SmallProjects = () => {
    return (
        <StyledSmallProjects>
            <Container>
                <StyledAppsWrapper direction={"column"}>
                    <Title><span>#</span>small-projects</Title>
                    <StyledProjectsFlexBox justify={"flex-start"} wrap={"wrap"}>
                        <CardProject projectTools={tools1} cachedVisible={false} liveVisible={true}
                                     h2text={"Bot boilerplate"}
                                     description={"Start creating scalable discord.js bot with typescript in seconds"}/>
                        <CardProject projectTools={tools2} cachedVisible={false} liveVisible={true}
                                     h2text={"My blog"}
                                     description={"Front-end of my future blog website written in vue"}/>
                        <CardProject projectTools={tools3} cachedVisible={false} liveVisible={true}
                                     h2text={"Chess pro"}
                                     description={"Figma landing page about service for viewing chess tournaments"}/>
                        <CardProject projectTools={tools3} cachedVisible={false} liveVisible={true}
                                     h2text={"Crash protect website"}
                                     description={"Figma template for website about anti-raid, anti-crash discord bot"}/>
                        <CardProject projectTools={tools4} cachedVisible={false} liveVisible={true}
                                     h2text={"CSS experiments"}
                                     description={"Collection of my different little projects in css"}/>
                        <CardProject projectTools={tools5} cachedVisible={false} liveVisible={true}
                                     h2text={"Web Dev nvim config"}
                                     description={"Config for neovim perfect for web developer"}/>
                        <CardProject projectTools={tools6} cachedVisible={false} liveVisible={true}
                                     h2text={"Ooku"}
                                     description={"Simple link shortener with auth"}/>
                        <CardProject projectTools={tools3} cachedVisible={false} liveVisible={true}
                                     h2text={"School website"}
                                     description={"Figma template website for my school"}/>
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
  padding-top: 10px;
  gap: 10px;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${myTheme.colors.fontWhite};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`