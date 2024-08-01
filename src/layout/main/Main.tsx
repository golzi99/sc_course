import React from 'react';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {Home} from "./home/Home";
import {Projects} from "./projects/Projects";
import {AboutMe} from "./aboutMe/AboutMe";
import {Contacts} from "./contacts/Contacts";

export const Main = () => {
    return (
        <StyledMain>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/about-me"} element={<AboutMe/>}/>
                <Route path={"/contacts"} element={<Contacts/>}/>
            </Routes>
        </StyledMain>
    );
};

const StyledMain = styled.main`
`