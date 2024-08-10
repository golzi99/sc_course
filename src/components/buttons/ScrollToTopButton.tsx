import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {myTheme} from "../../styles/Theme.styled";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <StyledButton onClick={scrollToTop} isVisible={isVisible}>
            Back
        </StyledButton>
    )
}

const StyledButton = styled.button<{isVisible: boolean}>`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: ${myTheme.colors.primaryBg};
    color: ${myTheme.colors.fontWhite};
    border: ${myTheme.colors.lightGrey} solid 1px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    display: ${props => (props.isVisible ? 'block' : 'none')};
    z-index: 1000;
`
