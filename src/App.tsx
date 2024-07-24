import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}
//заменить hr

export default App;

// обернуть в контейнер

// размер для смартфонов и тд 767
//            <Main/>
//             <hr/>
//             <Footer/>