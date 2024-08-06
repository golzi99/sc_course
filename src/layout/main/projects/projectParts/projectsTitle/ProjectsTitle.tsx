import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {font} from "../../../../../styles/Common";
import {myTheme} from "../../../../../styles/Theme.styled";

export const ProjectsTitle = () => {
    return (
        <StyledProjects>
            <Container>
                <TitleWrapper direction={"column"}>
                    <BaseTitle titleText={"projects"} symbolTitle={"/"}/>
                    <WhiteText>List of my projects</WhiteText>
                </TitleWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  margin-top: 60px;
`

const TitleWrapper = styled(FlexWrapper)`
  gap: 20px;
`

const WhiteText = styled.p`
  ${font({color: myTheme.colors.fontWhite})}
`

