import React from 'react';
import styled from "styled-components";
import {SkillBox} from "./skillBox/SkillBox";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import skillsImg from "../../../../assets/images/skillsImg.webp"
import {myTheme} from "../../../../styles/Theme.styled";

const languages = [
    "TypeScript", "Lua", "Python", "JavaScripts"
]

const dataBase = [
    "SQLite", "PostgreSQL", "Mongo"
]

const other = [
    "HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"
]

const tools = [
    "VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font", "Awesome"
]

const frameworks = [
    "React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"
]

export const Skills = () => {
    return (
        <StyledSkillsSection id={"skillBox"}>
            <FlexWrapper align={"center"}>
                <StyledTitle><span>#</span>skills</StyledTitle>
                <StyledLine></StyledLine>
            </FlexWrapper>
            <StyledSkillsContent justify={"space-between"}>
                <Photo src={skillsImg} alt={"skillsImg"}/>
                <StyledSkills direction={"column"} justify={"flex-start"} align={"flex-start"} wrap={"wrap-reverse"}>
                    <SkillBox skillBoxTitle={"Tools"} boxSkills={tools} maxWidth={"196px"}/>
                    <SkillBox skillBoxTitle={"Frameworks"} boxSkills={frameworks}  maxWidth={"196px"}/>
                    <SkillBox skillBoxTitle={"DataBase"} boxSkills={dataBase}  maxWidth={"178px"}/>
                    <SkillBox skillBoxTitle={"Other"} boxSkills={other}  maxWidth={"178px"}/>
                    <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}  maxWidth={"178px"}/>
                </StyledSkills>
            </StyledSkillsContent>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
`

const StyledSkillsContent = styled(FlexWrapper)`
  padding-top: 25px;
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 349px;
  object-fit: cover;
  position: relative;
`

const StyledSkills = styled(FlexWrapper)`
  gap: 16px;
  height: 280px;
`

const StyledTitle = styled.h2`
  font-size: 32px;
  color: ${myTheme.colors.white};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledLine = styled.span`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 239px;
  height: 1px;
  margin-left: 20px;
`