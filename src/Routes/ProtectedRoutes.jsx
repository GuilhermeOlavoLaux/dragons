import { Navigate, Outlet } from "react-router-dom";
import { DragonsProvider } from "../components/Context/DragonsContext";

const ProtectedRoutes = () => {
    const authenticated = localStorage.getItem('authenticated')

    return authenticated ? <DragonsProvider> <Outlet /> </DragonsProvider> : <Navigate to="/" />
};

export default ProtectedRoutes;

