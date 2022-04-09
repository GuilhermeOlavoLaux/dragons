import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import DragonsList from "../components/Dragons/DragonsList"

export default function AppRoutes() {

    return (
        <Routes>
            <Route exact path='/' element={<Login />} />

            <Route element={<ProtectedRoutes />}>
                <Route exact path='/dragons' element={<DragonsList />} />
            </Route>
        </Routes>
    )
}

