import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Login2 from "../components/Login2";
import ProtectedRoutes from "./ProtectedRoutes";

export default function AppRoutes() {

    return (
        <Routes>
            <Route exact path='/' element={<Login />} />

            <Route element={<ProtectedRoutes />}>
                <Route exact path='/cadastro' element={<Login2 />} />
            </Route>
        </Routes>
    )
}


