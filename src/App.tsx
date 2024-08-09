import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import styled from "styled-components";
import { myTheme } from './styles/Theme.styled';
import { Main } from './layout/main/Main';
import {HashRouter} from "react-router-dom";
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
            </Container>
        </HashRouter>
    );
}

// как разместить контент по центру у contacts and aboutMe при wrap
// как наладить container чтобы занимал нормально, вроде делаю под размеры, но не берет

// интродьюс - сделать расположение через флексы. flex: 1. это что-то вроде аналого гридов для флексов.
// в блоках где происходит wrap, сделать изменение напрвления флекса и выровнить


export default App;

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  background-color: ${myTheme.colors.primaryBg};
  padding: 8px;
`
