import React from 'react';
import styled from "styled-components";
import {SkillBox} from "../../../../components/mainParts/skills/SkillBox";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import line from "../../../../assets/images/Line 7 (Stroke).svg";
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
        <StyledSkillsSection>
            <StyledTitleSection direction={"row"}>
                <p><span>#</span>skills</p>
                <img src={line} alt={"line"}/>
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
  background-color: #282C33;
  margin-top: 5vh;
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
  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`