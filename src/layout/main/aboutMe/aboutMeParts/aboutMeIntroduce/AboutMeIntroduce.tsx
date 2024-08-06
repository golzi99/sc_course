import React from 'react';
import dark_man_2 from "../../../../../assets/images/dark_man_2.webp";
import {StyledLine} from "../../../../../styles/line/Line";
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {Container} from "../../../../../components/Container";
import {DotsLine} from "../../../../../styles/dot/DotsLine";
import {font} from "../../../../../styles/Common";

export const AboutMeIntroduce = () => {
    return (
        <StyledAboutMeIntroduce>
            <Container>
                <StyledContentWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                    <StyledAboutMeTextBlock direction={"column"} justify={"center"}>
                        <Text>Hello, i’m Elias!</Text>
                        <Text>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                            websites
                            from
                            scratch and raise them into modern user-friendly web experiences.
                        </Text>
                        <Text>
                            Transforming my creativity and knowledge into a websites has been my passion for over a
                            year.
                            I have been helping various clients to establish their presence online.
                            I always strive to learn about the newest technologies and frameworks.
                        </Text>
                    </StyledAboutMeTextBlock>
                    <StyledImgBox direction={"column"} align={"center"}>
                        <Photo src={dark_man_2} alt={"dark_man_2"}/>
                        <DotsBox1 direction={"column"} justify={"space-between"}>
                            {Array.from({length: 5}).map((_, index) =>
                                (<DotsLine key={index} countDots={5} gap={"16px"}></DotsLine>)
                            )}
                        </DotsBox1>
                        <DotsBox2 direction={"column"} justify={"space-between"}>
                            {Array.from({length: 4}).map((_, index) =>
                                (<DotsLine key={index} countDots={5} gap={"16px"}></DotsLine>)
                            )}
                        </DotsBox2>
                        <StyledLine lineWidth={"271px"}></StyledLine>
                    </StyledImgBox>
                </StyledContentWrapper>
            </Container>
        </StyledAboutMeIntroduce>
    );
};

const StyledAboutMeIntroduce = styled.section`

`

const StyledContentWrapper = styled(FlexWrapper)`
  @media (max-width: 869px) {
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

const Text = styled.p`
  ${font({Fmin: 16, Fmax: 16, lineHeight: 1.6})};
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