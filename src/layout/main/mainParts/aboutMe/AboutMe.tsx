import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {myTheme} from "../../../../styles/Theme.styled";
import dark_man_2 from "../../../../assets/images/dark_man_2.webp"
import dots from "../../../../assets/images/Dots.webp"

export const AboutMe = () => {
    return (
        <StyledAboutMe id={"about-me"}>
            <FlexWrapper align={"center"}>
                <StyledTitle><span>#</span>about-me</StyledTitle>
                <StyledLine></StyledLine>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <StyledAboutMeTextBlock direction={"column"} justify={"space-between"}>
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

                    <StyledButton href={"/aboutMe"}>Read more -&gt;</StyledButton>
                </StyledAboutMeTextBlock>
                <StyledImgBox direction={"column"}>
                    <Photo src={dark_man_2} alt={"dark_man_2"}/>
                    <StyledDots src={dots} alt={"dots1"} width={"84"} height={"84"} left={'0'} top={'0'}/>
                    <StyledDots src={dots} alt={"dots2"} width={"104"} height={"56"} left={'50%'} top={"50%"}/>
                </StyledImgBox>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`

`

const StyledAboutMeTextBlock = styled(FlexWrapper)`
  padding-top: 20px;
  max-width: 515px;
`

const Photo = styled.img`
  width: 100%;
  max-width: 339px;
  object-fit: cover;

`

const StyledImgBox = styled(FlexWrapper)`
  position: relative;
`

const StyledDots = styled.img<{left: string, top:string}>`
  position: absolute;
  object-fit: cover;
  height:  ${props => (props.height || `64` )};
  width:  ${props => (props.width || `64` )};
  left:  ${props => (props.left || `0` )};
  top:  ${props => (props.top || `0` )};
`



const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${myTheme.colors.white};

  span {
    color: ${myTheme.colors.mainPurpleColor};
  }
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  font-weight: 400;
  font-size: 24px;
  text-align: justify;
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

const StyledLine = styled.span`
  background-color: ${myTheme.colors.mainPurpleColor};
  width: 326px;
  height: 1px;
  margin-left: 20px;
`

//            <StyledAboutMeContent justify={"space-around"}>
//                 <FlexWrapper direction={"column"}>
//                     <StyledTitleSection direction={"row"} align={"center"}>
//                         <p><span>#</span>about-me</p>
//                         <StyledLine></StyledLine>
//                     </StyledTitleSection>
//                     <StyledAboutBoxText direction={"column"}>
//                         <StyledText>Hello, i’m Elias!</StyledText>
//                         <StyledText>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop
//                             responsive
//                             websites from
//                             scratch and raise them into modern user-friendly web experiences.</StyledText>
//                         <StyledText>Transforming my creativity and knowledge into a websites has been my passion for
//                             over a
//                             year. I have
//                             been helping various clients to establish their presence online. I always strive to learn
//                             about
//                             the
//                             newest technologies and frameworks.</StyledText>
//                         <StyledButton href={"/aboutMe"}>Read more -&gt;</StyledButton>
//                     </StyledAboutBoxText>
//                 </FlexWrapper>
//                 <img src={dark_man_2} alt={"dark_man_2"}/>
//             </StyledAboutMeContent>