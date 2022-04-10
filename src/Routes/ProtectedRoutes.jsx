import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthContext";

const ProtectedRoutes = () => {
    const {authenticated} = useContext(AuthContext)
    // const authenticated = true


    return authenticated ? <Outlet /> : <Navigate to="/" />
};

export default ProtectedRoutes;

