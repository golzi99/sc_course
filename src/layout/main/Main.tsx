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
            <Container>
                <Routes>
                    <Route path={"/home?"} element={<Home/>}/>
                    <Route path={"/projects"} element={<Projects/>}/>
                    <Route path={"/about-me"} element={<AboutMe/>}/>
                    <Route path={"/contacts"} element={<Contacts/>}/>
                </Routes>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
`

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  //border: red solid 1px;
`
