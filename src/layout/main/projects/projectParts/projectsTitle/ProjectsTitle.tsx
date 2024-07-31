import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {StyledBaseText} from "../../../../../styles/texts/Texts";

export const ProjectsTitle = () => {
    return (
        <StyledProjects>
            <Container>
                <TitleWrapper direction={"column"}>
                    <BaseTitle titleText={"projects"} symbolTitle={"/"}/>
                    <StyledBaseText>List of my projects</StyledBaseText>
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

