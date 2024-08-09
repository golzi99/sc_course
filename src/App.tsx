import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import styled from "styled-components";
import { myTheme } from './styles/Theme.styled';
import { Main } from './layout/main/Main';
import {HashRouter} from "react-router-dom";
import {ScrollToTopButton} from "./components/buttons/ScrollToTopButton";
import {Particle} from "./components/partical/Particle";
import React from "react";

function App() {
    return (
        <HashRouter>
            <Container>
                <Particle/>
                <Header/>
                <Main/>
                <Footer/>
                <ScrollToTopButton/>
            </Container>
        </HashRouter>
    );
}

export default App;

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  background-color: ${myTheme.colors.primaryBg};
  padding: 8px;
`
