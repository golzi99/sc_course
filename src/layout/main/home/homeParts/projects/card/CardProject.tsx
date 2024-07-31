import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {myTheme} from '../../../../../../styles/Theme.styled';
import {StyledLinkButton} from "../../../../../../components/buttons/BaseButton";
import {decodeHtml} from "../../../../../../decodingText/DecodeTextHtml";

type CardProjectPropsType = {
    img?: string
    title: string
    description: string
    projectTools?: Array<string>
    projectSource?: string
    cachedButton?: string

}

export const CardProject = (props: CardProjectPropsType) => {
    return (
        <StyledCardProject direction={"column"} justify={"space-between"}>
            {props.img && <img src={props.img} alt={"projectImg"}/>}
            <StyledInstruments wrap={"wrap"}>
                {props.projectTools?.map((tool, index) => {
                    return (<StyledInstrument key={index}>{tool}</StyledInstrument>)
                })}
            </StyledInstruments>
            <StyledH3>{props.title}</StyledH3>
            <StyledText>{props.description}</StyledText>
            <CardFlexButtonBox direction={"row"}>
                {props.projectSource && <StyledLinkButton to={""} >{decodeHtml(props.projectSource)}</StyledLinkButton>}
                {props.cachedButton && <StyledLinkButton to={""} disable>{decodeHtml(props.cachedButton)}</StyledLinkButton>}
            </CardFlexButtonBox>
        </StyledCardProject>
    );
};

const StyledCardProject = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
  width: 330px;
  height: 100%;

  img {
    height: 200px;
    object-fit: cover;
    border-bottom: solid ${myTheme.colors.lightGrey} 1px;
  }
`

const StyledInstruments = styled(FlexWrapper)`
  padding: 8px 0;
  row-gap: 16px;
`

const StyledInstrument = styled.p`
  color: ${myTheme.colors.lightGrey};
  padding-left: 8px;
  font-size: 16px;
  font-weight: 400;
`

const StyledH3 = styled.h3`
  border-top: solid ${myTheme.colors.lightGrey} 1px;
  font-size: 24px;
  font-weight: 500;
  padding: 16px;
  color: ${myTheme.colors.fontWhite}
`

const StyledText = styled.p`
  color: ${myTheme.colors.lightGrey};
  padding-left: 16px;
  font-size: 16px;
  font-weight: 400;
`

const CardFlexButtonBox = styled(FlexWrapper)`
  padding: 16px;
  gap: 20px;
`
