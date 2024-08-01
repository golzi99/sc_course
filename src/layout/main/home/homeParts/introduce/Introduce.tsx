import React from 'react';
import dark_man_1 from "../../../../../assets/images/dark_man_1.webp"
import styled from "styled-components";
import {FlexWrapper} from '../../../../../components/FlexWrapper';
import {myTheme} from "../../../../../styles/Theme.styled";
import dots from "../../../../../assets/images/Dots.webp";
import {MainIcon} from "../../../../../components/icon/MainIcon";
import {Container} from "../../../../../components/Container";
import {Quote} from "../../../../../components/blockquote/Quote";
import {StyledBaseText, StyledTitle} from "../../../../../styles/texts/Texts";
import {StyledLinkButton} from "../../../../../styles/buttons/BaseButton";

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
                                <StyledDots src={dots} alt={"dots1"} width={"84px"} height={"84px"}
                                            left={'360px'} top={'250px'}/>
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
`

const StyledContentWrapper = styled(FlexWrapper)`
    gap: 100px;
`

const StyledFirstPartWrapper = styled(FlexWrapper)`
  @media (max-width: 974px) {
    flex-direction: column;
  }
`

const StyledImgBox = styled(FlexWrapper)`
  position: relative;
  max-height: 386px;
`

const Photo = styled.img`
  max-width: 457px;
  object-fit: cover;
  z-index: 2;
`

const StyledLogoImg = styled(MainIcon)`
  position: absolute;
  object-fit: cover;
  z-index: 1;
  left: 0;
  top: 80px;
`

const StyledDots = styled.img<{ left: string, top: string, height: string, width: string }>`
  position: absolute;
  object-fit: cover;
  height: ${props => (props.height || `64`)};
  width: ${props => (props.width || `64`)};
  left: ${props => (props.left || `0`)};
  top: ${props => (props.top || `0`)};
  z-index: 2;
`

const StyledTextBox = styled(FlexWrapper)`
  gap: 20px;
  max-width: 500px;
`

const BoxUnderImage = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  gap: 20px;
  padding-left: 20px;
  width: 100%;
  height: 32px;
`

const StyledIndicator = styled.span`
  border: 1px solid ${myTheme.colors.mainPurpleColor};
  width: 16px;
  height: 16px;
  background-color: ${myTheme.colors.mainPurpleColor};
`

//<FlexWrapper justify={"center"} align={"center"} wrap={"wrap"}>
//                         <StyledTextBox direction={"column"} justify={"center"} >
//                             <StyledTitle>
//                                 Elias is a <span>web designer</span> and <span>front-end developer</span>
//                             </StyledTitle>
//                             <StyledText>
//                                 He crafts responsive websites where technologies meet creativity
//                             </StyledText>
//                             <StyledButton to={"/contacts"}>Contact me !!</StyledButton>
//                         </StyledTextBox>
//                         <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
//                             <StyledImgBox>
//                                 <Photo src={dark_man_1} alt={"dark_man_1"}/>
//                                 <StyledDots src={dots} alt={"dots1"} width={"84"} height={"84"} left={'360px'}
//                                             top={'250px'}/>
//                                 <StyledLogoImg iconId={"iconOutLineSvg"}
//                                                width={"155"} height={"155"}/>
//                             </StyledImgBox>
//                             <BoxUnderImage align={"center"}>
//                                 <StyledIndicator/>
//                                 <StyledText>
//                                     Currently working on <strong>Portfolio</strong>
//                                 </StyledText>
//                             </BoxUnderImage>
//                         </FlexWrapper>
//                     </FlexWrapper>