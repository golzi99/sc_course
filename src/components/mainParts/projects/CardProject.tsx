import React from 'react';
import styled, { css } from 'styled-components';
import {FlexWrapper} from "../../FlexWrapper";
import {myTheme} from "../../../styles/Theme.styled";

type CardProjectPropsType = {
    img: string
    title?: string
    h2text: string
    description: string
    projectTools?: Array<string>
    cachedVisible?: boolean
}

// ??? <StyledCardProject direction={"column"} justify={"space-between"}>

export const CardProject = (props: CardProjectPropsType) => {
    return (
        <StyledCardProject direction={"column"} justify={"space-between"}>
            <img src={props.img} alt={"projectImg"}/>
            <FlexWrapper wrap={"wrap"}>
                {props.projectTools?.map((tool) => {
                    return (<StyledText>{tool}</StyledText>)
                })}
            </FlexWrapper>
            <StyledBigText>{props.h2text}</StyledBigText>
            <StyledText>{props.description}</StyledText>
            <CardFlexButtonBox direction={"row"}>
                <StyledButton>Live &lt;~~&gt;</StyledButton>
                {props.cachedVisible && <StyledButton disable>Cached =&gt;</StyledButton>}
            </CardFlexButtonBox>
        </StyledCardProject>
    );
};

const StyledCardProject = styled(FlexWrapper)`
  width: 25%;
  height: 430px;
  border: #ABB2BF solid 1px;

  img {
    max-width: 100%;
    max-height: 100%;
    height: 187px;
    border-bottom: solid #ABB2BF 1px;
  }
`

const StyledBigText = styled.p`
  border-top: solid #ABB2BF 1px;
  font-size: 24px;
  font-weight: 500;
  padding: 10px;
  margin: 0;
  color: ${myTheme.colors.white}
`

const StyledText = styled.p`
  color: #ABB2BF;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 400;
`

const CardFlexButtonBox = styled(FlexWrapper)`
  padding: 10px;
  gap: 20px;
`

type StyledBtnPropsType = {
    disable?: boolean
}

const StyledButton = styled.a<StyledBtnPropsType>`
  padding: 8px 16px 8px 16px;
  border: #C778DD solid 1px;
  background-color: transparent;
  color: white;
  
  ${props => props.disable && css<StyledBtnPropsType>`
    border: #ABB2BF solid 1px;
    color: #ABB2BF;
  `}
`