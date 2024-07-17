import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../FlexWrapper";

type CardProjectPropsType = {
    img: string
    title: string
    h2text: string
    description: string
}

export const CardProject = (props: CardProjectPropsType) => {
    return (
        <StyledCardProject>
            <CardFlexBox direction={"column"}>
                <img src={props.img} alt={"projectImg"}/>
                <StyledText>{props.title}</StyledText>
                <h2>{props.h2text}</h2>
                <StyledText>{props.description}</StyledText>
                <CardFlexButtonBox direction={"row"}>
                    <StyledButton>Live &lt;~~&gt;</StyledButton>
                    <StyledButton>Cached &gt;=</StyledButton>
                </CardFlexButtonBox>
            </CardFlexBox>
        </StyledCardProject>
    );
};

const StyledCardProject = styled.div`
  width: 330px;
  height: 430px;
  border: #ABB2BF solid 1px;

  img {
    max-width: 100%;
    max-height: 100%;
    height: 187px;
    border-bottom: solid #ABB2BF 1px;
  }
`
const StyledText = styled.p`
  color: #ABB2BF;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 400;
`

const CardFlexBox = styled(FlexWrapper)`
  h2 {
    border-top: solid #ABB2BF 1px;
    padding: 10px;
    margin: 0;
  }
`

const CardFlexButtonBox = styled(FlexWrapper)`
  padding: 10px;
  gap: 20px;
`

const StyledButton = styled.button`
  padding: 8px 16px 8px 16px;
  border: #C778DD solid 1px;
  background-color: transparent;
  color: white;
`