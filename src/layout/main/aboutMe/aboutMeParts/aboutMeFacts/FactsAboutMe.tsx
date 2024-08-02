import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {myTheme} from "../../../../../styles/Theme.styled";
import {StyledBaseText} from "../../../../../styles/texts/Texts";
import {MainIcon} from "../../../../../components/icon/MainIcon";
import {DotsLine} from "../../../../../styles/dot/DotsLine";


const facts = [
    "I like winter more than summer",
    "I often bike with my friends",
    "I like <span>pizza</span> and <span>pasta</span>",
    "I was in <span>Egypt</span>, <span>Poland</span> and <span>Turkey</span>",
    "My favorite movie is <span>The Green Mile</span>",
    "I am still in school",
    "I don’t have any siblings",
]

// есть ли другой способ?

export const FactsAboutMe = () => {
    return (
        <StyledFactsAboutMe>
            <Container>
                <StyledFactsWrapper direction={"column"}>
                    <BaseTitle titleText={"my-fun-facts"}/>
                    <FlexWrapper justify={"space-between"}>
                        <FactsBox wrap={"wrap"}>
                            {facts.map((fact, index) => {
                                return (<StyledFact key={index} dangerouslySetInnerHTML={{ __html: fact }}/>)
                            })}
                        </FactsBox>
                        <ImageBox>
                            <DotsBox direction={"column"} justify={"space-between"}>
                                {Array.from({length: 4}).map((_, index) =>
                                    (<DotsLine key={index} count={4}></DotsLine>)
                                )}
                            </DotsBox>
                            <StyledLogoImg iconId={"iconOutLineSvg"}
                                           width={"113px"} height={"113px"}/>
                        </ImageBox>
                    </FlexWrapper>
                </StyledFactsWrapper>
            </Container>
        </StyledFactsAboutMe>
    );
};

const StyledFactsAboutMe = styled.section`
  
`

const StyledFactsWrapper = styled(FlexWrapper)`
  gap: 30px;
`

const FactsBox = styled(FlexWrapper)`
  gap: 16px;
`

const ImageBox = styled.div`
  position: relative;
  display: inline-block;
  min-width: 30%;

  @media (max-width: 886px) {
    display: none;
  }
`

const StyledFact = styled(StyledBaseText)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  padding: 8px;
  
  span {
    color: ${myTheme.colors.fontWhite};
  }
`

const StyledLogoImg = styled(MainIcon)`
  position: absolute;
  object-fit: cover;
  left: 60px;
  top: 60px;
`

const DotsBox = styled(FlexWrapper)`
  position: absolute;
  max-height: 64px;
`
