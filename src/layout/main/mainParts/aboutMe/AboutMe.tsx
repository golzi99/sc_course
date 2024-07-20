import React from 'react';
import styled from "styled-components";
import line from "../../../../assets/images/Line 7 (Stroke).svg";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {myTheme} from "../../../../styles/Theme.styled";
import dark_man_2 from "../../../../assets/images/dark_man_2.webp"

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <StyledAboutMeContent justify={"space-around"}>
                <FlexWrapper direction={"column"} justify={"space-around"}>
                    <StyledTitleSection direction={"row"}>
                        <p><span>#</span>about-me</p>
                        <img src={line} alt={"line"}/>
                    </StyledTitleSection>
                    <StyledText>Hello, i’m Elias!</StyledText>
                    <StyledText>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                        websites from
                        scratch and raise them into modern user-friendly web experiences.</StyledText>
                    <StyledText>Transforming my creativity and knowledge into a websites has been my passion for over a
                        year. I have
                        been helping various clients to establish their presence online. I always strive to learn about
                        the
                        newest technologies and frameworks.</StyledText>
                    <StyledButton>Read more -&gt;</StyledButton>
                </FlexWrapper>
                <img src={dark_man_2} alt={"dark_man_2"}/>
            </StyledAboutMeContent>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  background-color: #282C33;
  margin-top: 5vh;
`

const StyledTitleSection = styled(FlexWrapper)`
  color: ${myTheme.colors.white};
  font-size: 32px;
  font-weight: 500;

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledAboutMeContent = styled(FlexWrapper)`
  img {
    width: 30%;
  }
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  max-width: 50%;
  font-weight: 400;
  font-size: 16px;
`

const StyledButton = styled.a`
  padding: 8px 16px 8px 16px;
  border: #C778DD solid 1px;
  background-color: transparent;
  color: white;
  max-width: 140px;
`