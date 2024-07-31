import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {SkillBoxType} from "../../../../../types/types";
import {SkillBox} from "../../../home/homeParts/skills/skillBox/SkillBox";

const languages = [
    "TypeScript", "Lua", "Python", "JavaScript"
]

const dataBase = [
    "SQLite", "PostgreSQL", "Mongo"
]

const other = [
    "HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"
]

const tools = [
    "VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font", "Awesome", "KDE", "fish"
]

const frameworks = [
    "React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"
]

const GroupsSkills: Array<SkillBoxType> = [
    {
        skillBoxTitle: "Languages",
        boxSkills: languages,
        maxWidth: "178px"
    },
    {
        skillBoxTitle: "Other",
        boxSkills: other,
        maxWidth: "178px"
    },
    {
        skillBoxTitle: "Tools",
        boxSkills: tools,
        maxWidth: "196px"
    },
    {
        skillBoxTitle: "DataBase",
        boxSkills: dataBase,
        maxWidth: "178px"
    },
    {
        skillBoxTitle: "Frameworks",
        boxSkills: frameworks,
        maxWidth: "196px"
    }
]

export const SkillsAboutMe = () => {
    return (
        <StyledSkillsAboutMe>
            <Container>
                <StyledSkillsWrapper direction={"column"}>
                    <BaseTitle titleText={"skills"}/>
                    <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                        {GroupsSkills.map((skillBox, index) => {
                            return <SkillBox key={index} skillBoxTitle={skillBox.skillBoxTitle} boxSkills={skillBox.boxSkills}
                                             maxWidth={skillBox.maxWidth}/>
                        })}
                    </FlexWrapper>
                </StyledSkillsWrapper>
            </Container>
        </StyledSkillsAboutMe>
    );
};

const StyledSkillsAboutMe = styled.section`
  
`

const StyledSkillsWrapper = styled(FlexWrapper)`
  gap: 30px;
`