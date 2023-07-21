import { createContext, useContext, useState } from "react";

//1.create context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2.share the context with other components
export default function AuthProvider({children}) {

    //3.put some state in context
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if(username==='roshan' && password === 'dummy'){
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(true)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, setAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}