import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {myTheme} from "../../../../../styles/Theme.styled";

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
  border: ${myTheme.colors.lightGrey} solid 1px;
  max-width: 178px;
`

const StyledText = styled.p`
  color: #ABB2BF;
  font-size: 20px;
  font-weight: 400;
  padding: 0 8px 0 8px;
`
const StyledTitleSkill = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding: 0 8px 0 8px;
  color: ${myTheme.colors.white};
  border-bottom: ${myTheme.colors.lightGrey} solid 1px;
`
