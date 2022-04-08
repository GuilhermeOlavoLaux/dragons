import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Login2 from "../components/Login2";


export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/e" element={<Login2 />} />

        </Routes>
    )
}
