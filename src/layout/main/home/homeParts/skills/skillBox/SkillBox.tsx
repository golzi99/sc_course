import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";
import {myTheme} from "../../../../../../styles/Theme.styled";
import {StyledBaseText} from "../../../../../../styles/texts/Texts";

type SkillBoxPropsType = {
    skillBoxTitle: string
    boxSkills: Array<string>
    maxWidth: string
}

export const SkillBox = (props: SkillBoxPropsType) => {
    return (
        <StyledSkillBox direction={'column'} maxWidth={props.maxWidth}>
            <StyledTitleSkill>{props.skillBoxTitle}</StyledTitleSkill>
            <StyledTextWrapper wrap={"wrap"}>
                {props.boxSkills.map((skill, index) => (
                    <StyledBaseText key={index}>{skill}</StyledBaseText>))}
            </StyledTextWrapper>
        </StyledSkillBox>
    );
};

const StyledSkillBox = styled(FlexWrapper)<{ maxWidth: string }>`
  border: ${myTheme.colors.lightGrey} solid 1px;
  max-width: ${props => props.maxWidth || "178px"};
  padding: 8px 0;
  height: fit-content;
`

const StyledTextWrapper = styled(FlexWrapper)`
  padding: 8px 8px 0 8px;
  gap: 8px;
`

const StyledTitleSkill = styled.p`
  font-weight: 600;
  padding: 0 8px 8px 8px;
  color: ${myTheme.colors.fontWhite};
  border-bottom: ${myTheme.colors.lightGrey} solid 1px;
`
