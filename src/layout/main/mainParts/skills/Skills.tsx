import React from 'react';
import styled from "styled-components";
import {SkillBox} from "../../../../components/mainParts/skills/skillBox";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import line from "../../../../assets/images/Line 7 (Stroke).svg";
import {myTheme} from "../../../../styles/Theme.styled";

const languages = [
    "TypeScript", "Lua", "Python", "JavaScripts"
]

export const Skills = () => {
    return (
        <StyledSkillsSection>
            <StyledTitleSection direction={"row"} align={"center"} justify={"space-around"}>
                <h2><span>#</span>skills</h2>
                <img src={line} alt={"line"}/>
            </StyledTitleSection>
            <StyledSkills wrap={"wrap"} justify={"center"}>
                <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
                <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
                <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}/>
            </StyledSkills>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
  background-color: #282C33;
`

const StyledSkills = styled(FlexWrapper)`
  gap: 25px;
`

const StyledTitleSection = styled(FlexWrapper)`
  h2 {
    color: ${myTheme.colors.white}
  }
  span {
    color: ${myTheme.colors.mainPurpleColor}
  }
`