import React from 'react';
import dark_man_1 from "../../../../../assets/images/dark_man_1.webp"
import styled from "styled-components";
import {FlexWrapper} from '../../../../../components/FlexWrapper';
import {myTheme} from "../../../../../styles/Theme.styled";
import {MainIcon} from "../../../../../components/icon/MainIcon";
import {Container} from "../../../../../components/Container";
import {Quote} from "../../../../../components/blockquote/Quote";
import {StyledBaseText, StyledTitle} from "../../../../../styles/texts/Texts";
import {StyledLinkButton} from "../../../../../styles/buttons/BaseButtonLink";
import {DotsLine} from "../../../../../styles/dot/DotsLine";

export const Introduce = () => {
    return (
        <StyledIntroduce>
            <Container>
                <StyledContentWrapper direction={"column"} justify={"center"}>
                    <StyledFirstPartWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                        <StyledTextBox direction={"column"}>
                            <StyledTitle>
                                Elias is a <span>web designer</span> and <span>front-end developer</span>
                            </StyledTitle>
                            <StyledBaseText>
                                He crafts responsive websites where technologies meet creativity
                            </StyledBaseText>
                            <StyledLinkButton to={"/contacts"}>Contact me !!</StyledLinkButton>
                        </StyledTextBox>
                        <FlexWrapper direction={"column"} align={"center"}>
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
                                <StyledBaseText>
                                    Currently working on <strong>Portfolio</strong>
                                </StyledBaseText>
                            </BoxUnderImage>
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

const StyledContentWrapper = styled(FlexWrapper)`
  gap: 100px;
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
  max-width: 500px;
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
