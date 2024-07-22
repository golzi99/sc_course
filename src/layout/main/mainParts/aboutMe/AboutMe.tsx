import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {myTheme} from "../../../../styles/Theme.styled";
import dark_man_2 from "../../../../assets/images/dark_man_2.webp"

export const AboutMe = () => {
    return (
        <StyledAboutMe id={"about-me"}>
            <StyledAboutMeContent justify={"space-around"}>
                <FlexWrapper direction={"column"}>
                    <StyledTitleSection direction={"row"} align={"center"}>
                        <p><span>#</span>about-me</p>
                        <StyledLine></StyledLine>
                    </StyledTitleSection>
                    <StyledAboutBoxText direction={"column"}>
                        <StyledText>Hello, i’m Elias!</StyledText>
                        <StyledText>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop
                            responsive
                            websites from
                            scratch and raise them into modern user-friendly web experiences.</StyledText>
                        <StyledText>Transforming my creativity and knowledge into a websites has been my passion for
                            over a
                            year. I have
                            been helping various clients to establish their presence online. I always strive to learn
                            about
                            the
                            newest technologies and frameworks.</StyledText>
                        <StyledButton href={"/aboutMe"}>Read more -&gt;</StyledButton>
                    </StyledAboutBoxText>
                </FlexWrapper>
                <img src={dark_man_2} alt={"dark_man_2"}/>
            </StyledAboutMeContent>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  background-color: ${myTheme.colors.mainBack};
  min-height: 85vh;
`

const StyledTitleSection = styled(FlexWrapper)`
  color: ${myTheme.colors.white};
  font-size: 32px;
  font-weight: 500;
  gap: 20px;

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledAboutBoxText = styled(FlexWrapper)`
  padding-top: 5vh;
  gap: 3vh;
`


const StyledAboutMeContent = styled(FlexWrapper)`
  img {
    max-width: 30vw;
    max-height: 80vw;
    object-fit: cover;
  }
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  max-width: 55%;
  font-weight: 400;
  font-size: 24px;
`

const StyledButton = styled.a`
  padding: 8px 16px 8px 16px;
  border: ${myTheme.colors.mainPurpleColor} solid 1px;
  background-color: transparent;
  color: white;
  width: fit-content;
  text-decoration: none;

  &:hover {
    background-color:rgba(199, 120, 221, 0.2);
    cursor: pointer;
  }
  
`

const StyledLine = styled.span`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 25vw;
  height: 2px;
`