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
            <StyledTitleSection direction={"row"} align={"center"}>
                <StyledTitle><span>#</span>skills</StyledTitle>
                <StyledLine></StyledLine>
            </StyledTitleSection>
            <FlexWrapper justify={"space-between"}>
                <Photo src={skillsImg} alt={"skillsImg"}/>
                <StyledSkills direction={"column"} justify={"flex-start"} align={"flex-start"} wrap={"wrap-reverse"}>
                    <SkillBox skillBoxTitle={"Tools"} boxSkills={tools}/>
                    <SkillBox skillBoxTitle={"Frameworks"} boxSkills={frameworks}/>
                    <SkillBox skillBoxTitle={"DataBase"} boxSkills={dataBase}/>
                    <SkillBox skillBoxTitle={"Other"} boxSkills={other}/>
                    <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
                </StyledSkills>
            </FlexWrapper>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 349px;
  object-fit: cover;
  position: relative;
`

const StyledSkills = styled(FlexWrapper)`
  gap: 8px;
  height: 300px;
`

const StyledTitleSection = styled(FlexWrapper)`
  color: ${myTheme.colors.white};
  font-size: 32px;
  font-weight: 500;

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
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

// <StyledTitleSection direction={"row"} align={"center"}>
//      <p><span>#</span>skillBox</p>
//      <StyledLine></StyledLine>
//  </StyledTitleSection>
//             <StyledSkills justify={"space-around"}>
//                 <img src={skillsImg} alt={"skillsImg"}/>
//                 <StyledSkillBoxContainer>
//                     <FlexWrapper direction={"column"}>
//                         <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
//                     </FlexWrapper>
//                     <FlexWrapper direction={"column"}>
//                         <SkillBox skillBoxTitle={"DataBase"} boxSkills={dataBase}/>
//                         <SkillBox skillBoxTitle={"Other"} boxSkills={other}/>
//                     </FlexWrapper>
//                     <FlexWrapper direction={"column"}>
//                         <SkillBox skillBoxTitle={"Tools"} boxSkills={tools}/>
//                         <SkillBox skillBoxTitle={"Frameworks"} boxSkills={frameworks}/>
//                     </FlexWrapper>
//                 </StyledSkillBoxContainer>
//             </StyledSkills>