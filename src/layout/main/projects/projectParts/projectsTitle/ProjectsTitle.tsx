import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import { myTheme } from '../../../../../styles/Theme.styled';

export const ProjectsTitle = () => {
    return (
        <StyledProjects>
            <Container>
                <TitleWrapper direction={"column"}>
                    <Title><span>/</span>projects</Title>
                    <StyledText>List of my projects</StyledText>
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

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${myTheme.colors.fontWhite};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  font-size: 16px;
`
