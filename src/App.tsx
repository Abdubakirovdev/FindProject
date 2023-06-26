import React from 'react';
import './App.css';
import Header from "./Components/Main/Header/Header";
import {Outlet, Route, Routes} from "react-router-dom";
import Footer from "./Components/Main/Footer/Footer";
import Agents from "./Components/Main/Header/HeaderPages/Agents/Agents";




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
