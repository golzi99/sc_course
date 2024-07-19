import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {myTheme} from "../../../styles/Theme.styled";

type SkillBoxPropsType = {
    skillBoxTitle: string
    boxSkills: Array<string>
}

export const SkillBox = (props: SkillBoxPropsType) => {
    return (
        <StyledSkillBox direction={'column'}>
            <StyledTitleSkill>{props.skillBoxTitle}</StyledTitleSkill>
            <FlexWrapper wrap={"wrap"}>
                {props.boxSkills.map((skill) => (
                    <StyledText>{skill}</StyledText>))}
            </FlexWrapper>
        </StyledSkillBox>
    );
};

const StyledSkillBox = styled(FlexWrapper)`
  border: ${myTheme.colors.borderColor} solid 1px;
  max-width: 200px;
`

const StyledText = styled.p`
  color: #ABB2BF;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 400;
`
const StyledTitleSkill = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-left: 10px;
  color: ${myTheme.colors.white};
  border-bottom: ${myTheme.colors.borderColor} solid 1px;
`
