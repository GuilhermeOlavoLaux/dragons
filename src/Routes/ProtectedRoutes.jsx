import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const authenticated = false

    return authenticated ? <Outlet /> : <Navigate to="/" />
};

export default ProtectedRoutes;

