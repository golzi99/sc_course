import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";
import {myTheme} from "../../../../../../styles/Theme.styled";

type SkillBoxPropsType = {
    skillBoxTitle: string
    boxSkills: Array<string>
    maxWidth: string
}

export const SkillBox = (props: SkillBoxPropsType) => {
    return (
        <StyledSkillBox direction={'column'} maxWidth={props.maxWidth}>
            <StyledTitleSkill>{props.skillBoxTitle}</StyledTitleSkill>
            <StyledHr/>
            <StyledTextWrapper wrap={"wrap"}>
                {props.boxSkills.map((skill, index) => (
                    <StyledText key={index}>{skill}</StyledText>))}
            </StyledTextWrapper>
        </StyledSkillBox>
    );
};

const StyledSkillBox = styled(FlexWrapper)<{ maxWidth: string }>`
  border: ${myTheme.colors.lightGrey} solid 1px;
  max-width: ${props => props.maxWidth || "100%"};
  padding: 8px 0;
  height: fit-content;
`

const StyledTextWrapper = styled(FlexWrapper)`
  gap: 8px;
  padding-left: 8px;
`

const StyledHr = styled.hr`
  margin: 8px 0;
`
// как настроить цвет и ширину hr?


const StyledText = styled.p`
  color: #ABB2BF;
  font-size: 16px;
`
const StyledTitleSkill = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding: 0 8px;
  color: ${myTheme.colors.fontWhite};
`
