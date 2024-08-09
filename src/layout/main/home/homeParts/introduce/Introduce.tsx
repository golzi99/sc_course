import React from 'react';
import dark_man_1 from "../../../../../assets/images/dark_man_1.webp"
import styled from "styled-components";
import {FlexWrapper} from '../../../../../components/FlexWrapper';
import {myTheme} from "../../../../../styles/Theme.styled";
import {MainIcon} from "../../../../../components/icon/MainIcon";
import {Container} from "../../../../../components/Container";
import {Quote} from "../../../../../components/blockquote/Quote";
import {StyledLinkButton} from "../../../../../styles/buttons/BaseButtonLink";
import {DotsLine} from "../../../../../styles/dot/DotsLine";
import {StyledTitle} from "../../../../../styles/texts/StyledTitle";
import {font} from '../../../../../styles/Common';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Introduce = () => {
    return (
        <StyledIntroduce>
            <Container>
                <StyledContentWrapper direction={"column"} justify={"center"}>
                    <StyledFirstPartWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                        <StyledTextBox direction={"column"}>
                            <Title>
                                <h2>Elias is a <span>web designer</span> and <span>front-end developer</span></h2>
                                <Typewriter
                                    options={{
                                        loop: true,
                                        delay: 75
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString('Elias is a <strong>web designer</strong> and <strong>front-end developer</strong>')
                                            .pauseFor(5000)
                                            .start();
                                    }}
                                />
                            </Title>
                            <StyledText>
                                He crafts responsive websites where technologies meet creativity
                            </StyledText>
                            <StyledLinkButton to={"/contacts"} typeLinkButton={"primary"}>Contact me
                                !!</StyledLinkButton>
                        </StyledTextBox>
                        <FlexWrapper direction={"column"} align={"center"}>
                            <Tilt>
                                <StyledImgBox>
                                    <Photo src={dark_man_1} alt={"dark_man_1"}/>
                                    <DotsBox direction={"column"} justify={"space-between"}>
                                        {Array.from({length: 5}).map((_, index) =>
                                            (<DotsLine key={index} countDots={5} gap={"16px"}></DotsLine>)
                                        )}
                                    </DotsBox>
                                    <StyledLogoImg iconId={"iconOutLineSvg"}
                                                   width={"155px"} height={"155px"}/>
                                </StyledImgBox>
                            <BoxUnderImage align={"center"}>
                                <StyledIndicator/>
                                <StyledTextUnderImg>
                                    Currently working on <span>Portfolio</span>
                                </StyledTextUnderImg>
                            </BoxUnderImage>
                            </Tilt>
                        </FlexWrapper>
                    </StyledFirstPartWrapper>
                    <Quote></Quote>
                </StyledContentWrapper>
            </Container>
        </StyledIntroduce>
    );
};

const StyledIntroduce = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 25px;
`

const Title = styled(StyledTitle)`
  max-width: 537px;

  h2 {
    display: none;
  }

`

const StyledTextUnderImg = styled.p`
  ${font({weight: 500, Fmin: 16, Fmax: 16})};
  text-align: left;

  span {
    ${font({color: myTheme.colors.fontWhite, weight: 600, Fmin: 16, Fmax: 16})};
  }
`

const StyledText = styled.p`
  ${font({Fmin: 16, Fmax: 16, lineHeight: 1.6})};
  max-width: 463px;
  text-align: left;
`

const StyledContentWrapper = styled(FlexWrapper)`
  gap: 60px;
`

const Photo = styled.img`
  max-width: 457px;
  object-fit: cover;
  z-index: 2;
`

const DotsBox = styled(FlexWrapper)`
  position: absolute;
  max-height: 84px;
  left: 360px;
  top: 250px;
  z-index: 2;
`

const StyledLogoImg = styled(MainIcon)`
  position: absolute;
  object-fit: cover;
  z-index: 1;
  left: 0;
  top: 80px;
`

const StyledFirstPartWrapper = styled(FlexWrapper)`
  @media (max-width: 972px) {
    justify-content: center;
  }

  @media ${myTheme.media.mobile} {
    ${Photo} {
      max-width: 316px;
      margin-top: 20px;
    }

    ${DotsBox} {
      left: 230px;
      top: 190px;
      max-height: 56px;
    }

    ${StyledLogoImg} {
      left: -10px;
      top: 80px;
      width: 104px;
      height: 104px;
    }
  }
`

const StyledImgBox = styled(FlexWrapper)`
  position: relative;
  max-height: 386px;
`

const StyledTextBox = styled(FlexWrapper)`
  gap: 20px;
`

const BoxUnderImage = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  gap: 20px;
  padding: 8px;
  width: 100%;
  height: fit-content;
`

const StyledIndicator = styled.span`
  border: 1px solid ${myTheme.colors.mainPurpleColor};
  width: 16px;
  height: 16px;
  background-color: ${myTheme.colors.mainPurpleColor};
`
