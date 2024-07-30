import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import { myTheme } from '../../../../../styles/Theme.styled';
import {CardProject} from "../../../home/homeParts/projects/card/CardProject";
import projectImg1 from "../../../../../assets/images/banner1.webp";
import projectImg2 from "../../../../../assets/images/thumbnail1.webp";
import projectImg3 from "../../../../../assets/images/banner2.webp";
import projectImg4 from "../../../../../assets/images/thumbnail2.webp";
import projectImg5 from "../../../../../assets/images/Portfolio.webp";

const tools1: Array<string> = [
    "HTML", "SCSS", "Python", "Flask"
];

const tools2: Array<string> = [
    "React", "Express", "Discord.js", "Node.js"
];

const tools3: Array<string> = [
    "CSS", "Express", "Node.js"
];

const tools4: Array<string> = [
    "HTML", "CSS", "JS"
];

const tools5: Array<string> = [
    "Vue", "TS", "Less"
];

export const CompleteApps = () => {
    return (
        <StyledCompleteApps>
            <Container>
                <StyledAppsWrapper direction={"column"}>
                    <Title><span>#</span>complete-apps</Title>
                    <StyledProjectsFlexBox justify={"flex-start"} wrap={"wrap"}>
                        <CardProject img={projectImg1} projectTools={tools1} cachedVisible={true} liveVisible={true}
                                     h2text={"ChertNodes"} description={"Minecraft servers hosting"}></CardProject>
                        <CardProject img={projectImg3} projectTools={tools3} cachedVisible={false} liveVisible={true}
                                     h2text={"Kahoot Answers Viewer"}
                                     description={"Get answers to your kahoot quiz"}></CardProject>
                        <CardProject img={projectImg2} projectTools={tools2} cachedVisible={true} liveVisible={false}
                                     h2text={"ProtectX"} description={"Discord anti-crash bot"}></CardProject>
                        <CardProject img={projectImg4} projectTools={tools4} cachedVisible={false} liveVisible={true}
                                     h2text={"Kotik Bot"} description={"Multi-functional discord bot"}></CardProject>
                        <CardProject img={projectImg5} projectTools={tools5} cachedVisible={false} liveVisible={true}
                                     h2text={"Portfolio"} description={"You’re using it rn"}></CardProject>
                    </StyledProjectsFlexBox>
                </StyledAppsWrapper>
            </Container>
        </StyledCompleteApps>
    );
};

const StyledCompleteApps = styled.section`
`

const StyledAppsWrapper = styled(FlexWrapper)`
  gap: 30px;
`

const StyledProjectsFlexBox = styled(FlexWrapper)`
  padding-top: 10px;
  gap: 10px;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${myTheme.colors.fontWhite};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`