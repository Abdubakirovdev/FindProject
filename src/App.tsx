import React from 'react';
import './App.css';
import Header from "./Components/Main/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Components/Main/Main";
import Footer from "./Components/Main/Footer/Footer";

function App() {
    return (
        <>
           <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
