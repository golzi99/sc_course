import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import dark_man_2 from "../../../../../assets/images/dark_man_2.webp"
import dots from "../../../../../assets/images/Dots.webp"
import {Container} from "../../../../../components/Container";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {StyledLine} from "../../../../../styles/line/Line";
import {StyledLinkButton} from "../../../../../styles/buttons/BaseButton";
import {StyledBaseText} from "../../../../../styles/texts/Texts";

export const AboutMeHome = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper align={"center"}>
                    <BaseTitle titleText={"about-me"}/>
                    <StyledLine></StyledLine>
                </FlexWrapper>
                <StyledContentWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                    <StyledAboutMeTextBlock direction={"column"} justify={"center"}>
                        <StyledBaseText>Hello, i’m Elias!</StyledBaseText>
                        <StyledBaseText>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                            websites
                            from
                            scratch and raise them into modern user-friendly web experiences.
                        </StyledBaseText>
                        <StyledBaseText>
                            Transforming my creativity and knowledge into a websites has been my passion for over a
                            year.
                            I have been helping various clients to establish their presence online.
                            I always strive to learn about the newest technologies and frameworks.
                        </StyledBaseText>
                        <StyledLinkButton to={"/about-me"}>Read more -&gt;</StyledLinkButton>
                    </StyledAboutMeTextBlock>
                    <StyledImgBox direction={"column"} align={"center"}>
                        <Photo src={dark_man_2} alt={"dark_man_2"}/>
                        <StyledDots src={dots} alt={"dots1"} width={"84"} height={"84"} left={'0'} top={'60px'}/>
                        <StyledDots src={dots} alt={"dots2"} width={"104"} height={"56"} left={'220px'} top={"280px"}/>
                        <StyledLine maxLineWidth={"270px"}></StyledLine>
                    </StyledImgBox>
                </StyledContentWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`

`

const StyledContentWrapper = styled(FlexWrapper)`
  @media (max-width: 872px) {
    justify-content: center;
  }
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