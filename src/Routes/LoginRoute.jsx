import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../components/Context/AuthContext'
import { useContext } from 'react'

const LoginRoute = () => {
    const { authenticated } = useContext(AuthContext)
    
    if (authenticated === null) {
        return null
    }

    return (
        !authenticated ? (
            <Outlet />
        ) : (
            <Navigate to="/dragons" />
        )
    )
}

export default LoginRoute
