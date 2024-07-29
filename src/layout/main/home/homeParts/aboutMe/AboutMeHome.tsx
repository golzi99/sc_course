import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {myTheme} from "../../../../../styles/Theme.styled";
import dark_man_2 from "../../../../../assets/images/dark_man_2.webp"
import dots from "../../../../../assets/images/Dots.webp"
import {Container} from "../../../../../components/Container";

export const AboutMeHome = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper align={"center"}>
                    <StyledTitle><span>#</span>about-me</StyledTitle>
                    <StyledLine></StyledLine>
                </FlexWrapper>
                <StyledContentWrapper justify={"space-between"} wrap={"wrap"}>
                    <StyledAboutMeTextBlock direction={"column"} justify={"center"}>
                        <StyledText>Hello, i’m Elias!</StyledText>
                        <StyledText>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                            websites
                            from
                            scratch and raise them into modern user-friendly web experiences.
                        </StyledText>
                        <StyledText>
                            Transforming my creativity and knowledge into a websites has been my passion for over a
                            year.
                            I have been helping various clients to establish their presence online.
                            I always strive to learn about the newest technologies and frameworks.
                        </StyledText>
                        <StyledButton href={"/about-me"}>Read more -&gt;</StyledButton>
                    </StyledAboutMeTextBlock>
                    <StyledImgBox direction={"column"} align={"center"}>
                        <Photo src={dark_man_2} alt={"dark_man_2"}/>
                        <StyledDots src={dots} alt={"dots1"} width={"84"} height={"84"} left={'0'} top={'60px'}/>
                        <StyledDots src={dots} alt={"dots2"} width={"104"} height={"56"} left={'220px'} top={"280px"}/>
                        <StyledLine maxWidth={"270px"}></StyledLine>
                    </StyledImgBox>
                </StyledContentWrapper>
            </Container>
        </StyledAboutMe>
    );
};

// как разместить контент по центру у contacts and aboutme при wrap

const StyledAboutMe = styled.section`

`

const StyledContentWrapper = styled(FlexWrapper)`
`

const StyledAboutMeTextBlock = styled(FlexWrapper)`
  max-width: 515px;
  gap:30px;
`

const Photo = styled.img`
  width: 100%;
  max-width: 339px;
  object-fit: cover;
`

const StyledImgBox = styled(FlexWrapper)`
  position: relative;
`

const StyledDots = styled.img<{ left: string, top: string }>`
  position: absolute;
  object-fit: cover;
  height: ${props => (props.height || `64`)};
  width: ${props => (props.width || `64`)};
  left: ${props => (props.left || `0`)};
  top: ${props => (props.top || `0`)};
`


const StyledTitle = styled.h2`
  font-size: 32px;
  color: ${myTheme.colors.fontWhite};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  font-weight: 400;
  font-size: 16px;
  //text-align: justify;
`

const StyledButton = styled.a`
  padding: 8px 16px 8px 16px;
  border: ${myTheme.colors.mainPurpleColor} solid 1px;
  background-color: transparent;
  color: white;
  width: fit-content;
  text-decoration: none;

  &:hover {
    background-color: rgba(199, 120, 221, 0.2);
    cursor: pointer;
  }
`

const StyledLine = styled.span<{maxWidth?: string}>`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 25vw;
  max-width: ${props => props.maxWidth || "500px"};
  height: 1px;
  margin-left: 20px;
`