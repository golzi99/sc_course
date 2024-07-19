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

export const Skills = () => {
    return (
        <StyledSkillsSection>
            <StyledTitleSection direction={"row"}>
                <p><span>#</span>skills</p>
                <img src={line} alt={"line"}/>
            </StyledTitleSection>
            <StyledSkills justify={"space-around"}>
                <img src={skillsImg} alt={"skillsImg"}/>
                <FlexWrapper justify={"space-between"} align={"start"} wrap={"wrap"}>
                    <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
                    <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
                    <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
                </FlexWrapper>
            </StyledSkills>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
  background-color: #282C33;
`

const StyledSkills = styled(FlexWrapper)`
    img {
      width: 30vw;
    }
`

const StyledTitleSection = styled(FlexWrapper)`
  color: ${myTheme.colors.white};
  font-size: 32px;
  font-weight: 500;
  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`