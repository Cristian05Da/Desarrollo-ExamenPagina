import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "../pages/admin";

export function AdminRouter() {
    return (
        <Routes>
            <Route paht="/admin/*" element={<Auth />} />
        </Routes>
    );



}
