import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import dark_man_2 from "../../../../../assets/images/dark_man_2.webp"
import {Container} from "../../../../../components/Container";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {StyledLine} from "../../../../../styles/line/Line";
import {StyledLinkButton} from "../../../../../styles/buttons/BaseButtonLink";
import {StyledBaseText} from "../../../../../styles/texts/Texts";
import {DotsLine} from "../../../../../styles/dot/DotsLine";

export const AboutMeHome = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper align={"center"}>
                    <BaseTitle titleText={"about-me"}/>
                    <StyledLine lineWidth={"326px"} mediaStop={"534px"}></StyledLine>
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
                        <DotsBox1 direction={"column"} justify={"space-between"}>
                            {Array.from({length: 5}).map((_, index) =>
                                (<DotsLine key={index} count={5} gap={"16px"}></DotsLine>)
                            )}
                        </DotsBox1>
                        <DotsBox2 direction={"column"} justify={"space-between"}>
                            {Array.from({length: 4}).map((_, index) =>
                                (<DotsLine key={index} count={5} gap={"16px"}></DotsLine>)
                            )}
                        </DotsBox2>
                        <StyledLine lineWidth={"271px"}></StyledLine>
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

const DotsBox1 = styled(FlexWrapper)`
  position: absolute;
  max-height: 84px;
  left: 0;
  top: 60px;
`

const DotsBox2 = styled(FlexWrapper)`
  position: absolute;
  max-height: 56px;
  left: 240px;
  top: 280px;
`