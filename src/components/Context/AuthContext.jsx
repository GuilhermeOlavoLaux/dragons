import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false)

    function doLogin() {
        localStorage.setItem('authenticated', true)
        setAuthenticated(true)
    }

    function doLogout() {
        localStorage.setItem('authenticated', false)
        setAuthenticated(false)
    }

    useEffect(() => {
        if (localStorage.getItem('authenticated')) {
            setAuthenticated(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated, doLogin, doLogout }}>
            {children}
        </AuthContext.Provider>
    )
}



export { AuthContext, AuthProvider }