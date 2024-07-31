import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";

export const FactsAboutMe = () => {
    return (
        <StyledFactsAboutMe>
            <Container>
                <StyledFactsWrapper direction={"column"}>
                    <BaseTitle titleText={"my-fun-facts"}/>
                    <FlexWrapper>

                    </FlexWrapper>
                </StyledFactsWrapper>
            </Container>
        </StyledFactsAboutMe>
    );
};

const StyledFactsAboutMe = styled.section`
  
`

const StyledFactsWrapper = styled(FlexWrapper)`

`