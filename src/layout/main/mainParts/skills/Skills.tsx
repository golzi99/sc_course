import React from 'react';
import styled from "styled-components";
import {SkillBox} from "../../../../components/mainParts/skills/SkillBox";
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
        <StyledSkillsSection id={"skills"}>
            <StyledTitleSection direction={"row"} align={"center"}>
                <p><span>#</span>skills</p>
                <StyledLine></StyledLine>
            </StyledTitleSection>
            <StyledSkills justify={"space-around"}>
                <img src={skillsImg} alt={"skillsImg"}/>
                <StyledSkillBoxContainer>
                    <FlexWrapper direction={"column"}>
                        <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <SkillBox skillBoxTitle={"DataBase"} boxSkills={dataBase}/>
                        <SkillBox skillBoxTitle={"Other"} boxSkills={other}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <SkillBox skillBoxTitle={"Tools"} boxSkills={tools}/>
                        <SkillBox skillBoxTitle={"Frameworks"} boxSkills={frameworks}/>
                    </FlexWrapper>
                </StyledSkillBoxContainer>
            </StyledSkills>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
  background-color: ${myTheme.colors.mainBack};
  min-height: 60vh;
`

const StyledSkills = styled(FlexWrapper)`
    img {
      width: 30vw;
    }
`

const StyledSkillBoxContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`

const StyledTitleSection = styled(FlexWrapper)`
  color: ${myTheme.colors.white};
  font-size: 32px;
  font-weight: 500;
  gap: 20px;
  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledLine = styled.span`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 25vw;
  height: 2px;
`