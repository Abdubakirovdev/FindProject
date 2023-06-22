import React from 'react';
import './App.css';
import Header from "./Components/Main/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Components/Main/Footer/Footer";




function App() {
    return (
        <>
           <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;
