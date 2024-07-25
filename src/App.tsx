import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import styled from "styled-components";
import { myTheme } from './styles/Theme.styled';

function App() {
    return (
        <div className="App">
            <Container>
                <Header/>
                <Main/>
                <Footer/>
            </Container>
        </div>
    );
}
//заменить hr

export default App;

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 50px;
  background-color: ${myTheme.colors.mainBack};
`

// обернуть в контейнер

// размер для смартфонов и тд 767
//            <Main/>
//             <hr/>
//             <Footer/>