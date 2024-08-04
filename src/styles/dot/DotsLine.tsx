import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {StyledDot} from "./Dot";

type DotsLinePropsType = {
    countDots: number,
    gap?: string
}

export const DotsLine = (props: DotsLinePropsType) => {
    return (
        <StyledFlex gap={props.gap || "0"}>
            {Array.from({length: props.countDots}).map((_, index) =>
                (<StyledDot key={index}></StyledDot>)
            )}
        </StyledFlex>
    );
};

const StyledFlex = styled(FlexWrapper)<{ gap: string }>`
  gap: ${props => props.gap};
  height: 4px;
`