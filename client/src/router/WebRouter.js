import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/web";


export function WebRouter() {

    return (
        <Routes>
            <Route paht="/" element={<Home />} />
        </Routes>
    );



}
