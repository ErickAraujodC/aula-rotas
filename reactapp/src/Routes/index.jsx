import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "../Pages/HomePage";
import FrontEndPage from "../Pages/FrontEndPage";
import BackEndPage from "../Pages/BackEndPage";

const RoutesWeb = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='/front-end' element={<FrontEndPage/>} />
            <Route path='/back-end' element={<BackEndPage/>} />
        </Routes>
    </BrowserRouter>
);

export default RoutesWeb;