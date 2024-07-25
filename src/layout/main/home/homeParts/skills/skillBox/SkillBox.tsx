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
            <FlexWrapper wrap={"wrap"}>
                {props.boxSkills.map((skill) => (
                    <StyledText>{skill}</StyledText>))}
            </FlexWrapper>
        </StyledSkillBox>
    );
};

const StyledSkillBox = styled(FlexWrapper)<{ maxWidth: string }>`
  border: ${myTheme.colors.lightGrey} solid 1px;
  max-width: ${props => props.maxWidth || "100%"};
  padding: 8px 0;
`

const StyledHr = styled.hr`
  margin: 8px 0;
`
// как настроить цвет и ширину hr?


const StyledText = styled.p`
  color: #ABB2BF;
  font-size: 16px;
  font-weight: 400;
  padding: 0 8px;
`
const StyledTitleSkill = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding: 0 8px;
  color: ${myTheme.colors.white};
`
