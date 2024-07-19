import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../FlexWrapper";

type CardProjectPropsType = {
    img: string
    title?: string
    h2text: string
    description: string
    projectTools?: Array<string>
}

export const CardProject = (props: CardProjectPropsType) => {
    return (
        <StyledCardProject direction={"column"}>
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
                <StyledButton>Cached =&gt;</StyledButton>
            </CardFlexButtonBox>
        </StyledCardProject>
    );
};

const StyledCardProject = styled(FlexWrapper)`
  width: 20%;
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

const StyledButton = styled.a`
  padding: 8px 16px 8px 16px;
  border: #C778DD solid 1px;
  background-color: transparent;
  color: white;
`