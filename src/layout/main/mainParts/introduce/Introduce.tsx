import React from 'react';
import dark_man_1 from "../../../../assets/images/dark_man_1.webp"
import styled from "styled-components";
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {myTheme} from "../../../../styles/Theme.styled";
import dots from "../../../../assets/images/Dots.webp";
import {MainIcon} from "../../../../components/icon/MainIcon";

export const Introduce = () => {
    return (
        <StyledIntroduce>
            <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
                <StyledTextBox direction={"column"}>
                    <StyledTitle>
                        Elias is a <span>web designer</span> and <span>front-end developer</span>
                    </StyledTitle>
                    <StyledText>
                        He crafts responsive websites where technologies meet creativity
                    </StyledText>
                    <StyledButton href={"/contacts"}>Contact me !!</StyledButton>
                </StyledTextBox>
                <FlexWrapper direction={"column"} align={"center"}>
                    <StyledImgBox>
                        <Photo src={dark_man_1} alt={"dark_man_1"}/>
                        <StyledDots src={dots} alt={"dots1"} width={"84"} height={"84"} left={'360px'} top={'250px'}/>
                        <StyledLogoImg iconId={"iconOutLineSvg"}
                                  width={"155"} height={"155"}/>
                    </StyledImgBox>
                    <BoxUnderImage align={"center"}>
                        <StyledIndicator/>
                        <StyledText>
                            Currently working on <strong>Portfolio</strong>
                        </StyledText>
                    </BoxUnderImage>
                </FlexWrapper>
            </FlexWrapper>
        </StyledIntroduce>
    );
};

//StyledTextBox - можно ли задать расстояние между элементами, но просто описать это в FlexWrapper?
// использовал justify, но он не реагирует вообще.

// размеры секции, как правильно задать ?

const StyledIntroduce = styled.section`
`

const StyledImgBox = styled(FlexWrapper)`
  position: relative;
`

const Photo = styled.img`
  width: 100%;
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

const StyledDots = styled.img<{left: string, top:string}>`
  position: absolute;
  object-fit: cover;
  height:  ${props => (props.height || `64` )};
  width:  ${props => (props.width || `64` )};
  left:  ${props => (props.left || `0` )};
  top:  ${props => (props.top || `0` )};
  z-index: 2;
`

const StyledButton = styled.a`
  padding: 8px 16px 8px 16px;
  border: ${myTheme.colors.mainPurpleColor} solid 1px;
  background-color: transparent;
  color: ${myTheme.colors.white};
  width: fit-content;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    background-color: rgba(199, 120, 221, 0.2);
    cursor: pointer;
  }
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
  font-size: 16px;
`

const StyledTextBox = styled(FlexWrapper)`
  gap: 20px;
  max-width: 537px;
`

const BoxUnderImage = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: fit-content;
  height: 40px;
`

const StyledIndicator = styled.p`
  border: 1px solid ${myTheme.colors.mainPurpleColor};
  width: 16px;
  height: 16px;
  flex-direction: row;
  background-color: ${myTheme.colors.mainPurpleColor};
`
//            <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
//                 <StyledTextBox direction={"column"}>
//                     <StyledTitle>
//                         Elias is a <span>web designer</span> and <span>front-end developer</span>
//                     </StyledTitle>
//                     <StyledDescription>
//                         He crafts responsive websites where technologies meet creativity
//                     </StyledDescription>
//                     <StyledButton href={"/contacts"}>Contact me !!</StyledButton>
//                 </StyledTextBox>
//                 <FlexWrapper align={"center"} direction={"column"}>
//                     <Photo src={dark_man_1} alt={"dark_man_1"}/>
//                     <BoxUnderImage align={"center"}>
//                         <StyledIndicator/>
//                         <StyledCurrentActivity>
//                             Currently working on <strong>Portfolio</strong>
//                         </StyledCurrentActivity>
//                     </BoxUnderImage>
//                 </FlexWrapper>
//             </FlexWrapper>
//             <Quote/>