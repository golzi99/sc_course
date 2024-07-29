import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import styled from "styled-components";
import { myTheme } from './styles/Theme.styled';
import { Main } from './layout/main/Main';
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Container>
                <Header/>
                <Main/>
                <Footer/>
            </Container>
        </HashRouter>
    );
}

export default App;

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 50px;
  background-color: ${myTheme.colors.primaryBg};
`
