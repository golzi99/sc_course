import React from 'react';
import {StyledTitle} from "../../styles/texts/StyledTitle";

type BaseTitlePropsType = {
    titleText: string
    symbolTitle?: string
}

export const BaseTitle = (props: BaseTitlePropsType) => {
    return (
        <StyledTitle><span>{props.symbolTitle || "#"}</span>{props.titleText}</StyledTitle>
    );
};