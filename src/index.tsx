import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {setUpStore} from "./store/Store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavAdmin from "./Components/Main/AminPage/Inbox/NavAdmin";
import InboxPage from "./Components/Main/AminPage/Inbox/InboxPage/InboxPage";
import Agents from "./Components/Main/Header/HeaderPages/Agents/Agents";
import Realty from "./Components/Main/AminPage/Inbox/Realty/Realty";
import Payment from "./Components/Main/AminPage/Inbox/Payment/Payment";
import Settings from "./Components/Main/AminPage/Inbox/Settings/Settings";
import Main from "./Components/Main/Main";
import Apartamen from "./Components/Main/Explore/Dream/Apartamen";
import Explore from "./Components/Main/Explore/Explore";
import Register from "./Components/Main/Header/HeaderPages/Register/Register";
import Buy from "./Components/Main/Header/HeaderPages/Buy/Buy";
import Rent from './Components/Main/Header/HeaderPages/Rent/Rent'
import Reviews from "./Components/Main/Header/HeaderPages/Reviews/Reviews";
import Profile from "./Components/Main/Header/HeaderPages/Register/Profile/Profile";
import ForgotPass from "./Components/Main/AminPage/ForgotPass/ForgotPass";
import Admin from "./Components/Main/AminPage/Admin/Admin";
import AboutAgents from "./Components/Main/AminPage/Inbox/Agents/aboutAgents";
import Reg from "./Components/Main/Header/HeaderPages/Register/Reg/Reg";

import AgentsDetail from "./Components/Main/Header/HeaderPages/Agents/AgentsDetail/AgentsDetail";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setUpStore()

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route index element={<Main/>}/>
                    <Route path={'/apartamen'} element={<Apartamen/>}/>
                    <Route path={'/explore'} element={<Explore/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    <Route path={"/regis"} element={<Reg/>}/>
                    <Route path={'/buy'} element={<Buy/>}/>
                    <Route path={'/rent'} element={<Rent/>}/>
                    <Route path={'/agents'} element={<Agents/>}/>
                    <Route path={'/AgentsDetail'} element={<AgentsDetail/>}/>
                    <Route path={'/review'} element={<Reviews/>}/>
                    <Route path={'/apartment'} element={<Apartamen/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={"/forgot-pass"} element={<ForgotPass/>}/>
                    <Route path={"/regis"} element={<Reg/>}/>
                    <Route path={'/agents'} element={<Agents/>}/>
                    <Route path={'/buy'} element={<Buy/>}/>
                </Route>
                <Route path={"/admin"} element={<Admin/>}/>
                <Route path={'/home-admin'} element={<NavAdmin/>}>
                    <Route index element={<InboxPage/>}/>
                    <Route path={"/home-admin/agents"} element={<AboutAgents/>}/>
                    <Route path={"/home-admin/realty"} element={<Realty/>}/>
                    <Route path={"/home-admin/payment"} element={<Payment/>}/>
                    <Route path={"/home-admin/settings"} element={<Settings/>}/>
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
