import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthContext";
import { DragonsProvider } from "../components/Context/DragonsContext";

const ProtectedRoutes = () => {
    const { authenticated } = useContext(AuthContext)


    return authenticated ?
        <DragonsProvider>
            <Outlet />
        </DragonsProvider>
        : <Navigate to="/" />
};

export default ProtectedRoutes;

