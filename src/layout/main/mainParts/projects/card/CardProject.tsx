import React from 'react';
import styled, {css} from 'styled-components';
import {FlexWrapper} from '../../../../../components/FlexWrapper';
import {myTheme} from '../../../../../styles/Theme.styled';

type CardProjectPropsType = {
    img: string
    title?: string
    h2text: string
    description: string
    projectTools?: Array<string>
    cachedVisible?: boolean
}

export const CardProject = (props: CardProjectPropsType) => {
    return (
        <StyledCardProject direction={"column"} justify={"space-between"}>
            <img src={props.img} alt={"projectImg"}/>
            <StyledInstruments wrap={"wrap"}>
                {props.projectTools?.map((tool) => {
                    return (<StyledText>{tool}</StyledText>)
                })}
            </StyledInstruments>
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
  border: ${myTheme.colors.lightGrey} solid 1px;
  width: 330px;

  img {
    height: 201px;
    object-fit: cover;
    border-bottom: solid ${myTheme.colors.lightGrey} 1px;
  }
`

const StyledInstruments = styled(FlexWrapper)`
  padding: 5px 0;
  row-gap: 10px;
`

const StyledBigText = styled.p`
  border-top: solid ${myTheme.colors.lightGrey} 1px;
  font-size: 24px;
  font-weight: 500;
  padding: 10px;
  margin: 0;
  color: ${myTheme.colors.white}
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
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
  border: ${myTheme.colors.mainPurpleColor} solid 1px;
  background-color: transparent;
  color: ${myTheme.colors.white};

  ${props => props.disable && css<StyledBtnPropsType>`
    border: ${myTheme.colors.lightGrey} solid 1px;
    color: ${myTheme.colors.lightGrey};
  `}

  ${props => !props.disable && css<StyledBtnPropsType>`
    &:hover {
      background-color: rgba(199, 120, 221, 0.2);
      cursor: pointer;
    }
  `}


`