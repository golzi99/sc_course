import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {myTheme} from '../../../../../../styles/Theme.styled';
import {StyledLinkButton} from "../../../../../../styles/buttons/BaseButtonLink";
import {decodeHtml} from "../../../../../../decodingText/DecodeTextHtml";
import {font} from "../../../../../../styles/Common";

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
        <StyledCardProject direction={"column"}>
            {props.img && <Image src={props.img} alt={"projectImg"}/>}
            <StyledInstruments justify={"flex-start"} align={"flex-start"} wrap={"wrap"}>
                {props.projectTools?.map((tool, index) => {
                    return (<Instrument key={index}>{tool}</Instrument>)
                })}
            </StyledInstruments>
            <StyledTextBlock direction={"column"}>
                <h3>{props.title}</h3>
                <StyledText>{props.description}</StyledText>
                <CardFlexButtonBox>
                    {props.projectSource &&
                        <StyledLinkButton to={""} typeLinkButton={"primary"}>{decodeHtml(props.projectSource)}</StyledLinkButton>}
                    {props.cachedButton &&
                        <StyledLinkButton to={""} typeLinkButton={"secondary"}>{decodeHtml(props.cachedButton)}</StyledLinkButton>}
                </CardFlexButtonBox>
            </StyledTextBlock>
        </StyledCardProject>
    );
};

const Image = styled.img`
  min-height: 200px;
  width: 100%;
  object-fit: cover;
  border-bottom: ${myTheme.colors.lightGrey} solid 1px;
`

const StyledCardProject = styled(FlexWrapper)`
  border: ${myTheme.colors.lightGrey} solid 1px;
`

const StyledText = styled.p`
  ${font({Fmin: 16, Fmax: 16})};
  text-align: left;
  flex-grow: 2;
  display: flex;
  align-items: center;
`

const Instrument = styled.p`
  ${font({})}
  padding-left: 8px;
`

const StyledInstruments = styled(FlexWrapper)`
  align-content: flex-start;
  height: fit-content;
  row-gap: 16px;
  padding: 8px 0;
`

const StyledTextBlock = styled(FlexWrapper)`
  border-top: solid ${myTheme.colors.lightGrey} 1px;
  padding: 16px;
  gap: 16px;
  
  h3 {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`

const CardFlexButtonBox = styled.div`
  display: flex;
  justify-content: center;
  ${StyledLinkButton} {
    & + ${StyledLinkButton} {
      margin-left: 20px;
    }
  }
`
