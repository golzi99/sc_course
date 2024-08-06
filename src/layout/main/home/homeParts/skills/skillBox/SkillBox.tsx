import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";
import {myTheme} from "../../../../../../styles/Theme.styled";
import { font } from '../../../../../../styles/Common';

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
                    <Skill key={index}>{skill}</Skill>))}
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

const Skill = styled.p`
  ${font({Fmin: 16, Fmax: 16})}
`

const StyledTitleSkill = styled.p`
  ${font({color: myTheme.colors.fontWhite, weight: 600, Fmin: 16, Fmax: 16})}
  padding: 0 8px 8px 8px;
  border-bottom: ${myTheme.colors.lightGrey} solid 1px;
`
