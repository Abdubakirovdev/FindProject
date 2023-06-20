import React from 'react';
import './App.css';
import Header from "./Components/Main/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Components/Main/Main";
import Footer from "./Components/Main/Footer/Footer";
import Explore from "./Components/Main/Explore/Explore";
import Apartamen from "./Components/Main/Explore/Dream/Apartamen";
import Register from "./Components/Main/Header/HeaderPages/Register/Register";
import Buy from "./Components/Main/Header/HeaderPages/Buy/Buy";
import Rent from "./Components/Main/Explore/Dream/RentsHero/Rent";
import Agents from "./Components/Main/Header/HeaderPages/Agents/Agents";
import Reviews from "./Components/Main/Header/HeaderPages/Reviews/Reviews";
import Profile from "./Components/Main/Header/HeaderPages/Register/Profile/Profile";


function App() {
    return (
        <>
           <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/apartamen'} element={<Apartamen/>}/>
                <Route path={'/explore'} element={<Explore/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'/buy'} element={<Buy/>}/>
                <Route path={'/rent'} element={<Rent/>}/>
                <Route path={'/agents'} element={<Agents/>}/>
                <Route path={'/review'} element={<Reviews/>}/>
                <Route path={'/apartment'} element={<Apartamen/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
