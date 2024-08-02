import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {BaseTitle} from "../../../../components/titles/BaseTitle";
import {ContactResource} from "../../../../components/contact/ContactResource";

export const ContactsMedia = () => {
    return (
        <StyledMedia>
            <Container>
                <FlexWrapper direction={"column"}>
                    <BaseTitle titleText={"all-media"}/>
                    <StyledResourceMedia>
                        <ContactResource iconContact={"twitterSvg"} contactName={"@elias"}></ContactResource>
                        <ContactResource iconContact={"twitterSvg"} contactName={"@elias"}></ContactResource>
                    </StyledResourceMedia>
                </FlexWrapper>
            </Container>
        </StyledMedia>
    );
};

const StyledMedia = styled.section`
`

const StyledResourceMedia = styled(FlexWrapper)`
  margin-top: 25px;
  gap: 20px;
`