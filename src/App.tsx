import React from 'react';
import './App.css';
import Header from "./Components/Main/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Components/Main/Main";
import Footer from "./Components/Main/Footer/Footer";
import DreamApartamen from "./Components/Main/Explore/Dream/Apartamen";
import Explore from "./Components/Main/Explore/Explore";
import Rent from "./Components/Main/Explore/Dream/RentsHero/Rent";
import Apartamen from "./Components/Main/Explore/Dream/Apartamen";

function App() {
    return (
        <>
           <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/apartamen'} element={<Apartamen/>}/>
                <Route path={'/explore'} element={<Explore/>}/>
             </Routes>
            <Footer/>
        </>
    );
}

export default App;
