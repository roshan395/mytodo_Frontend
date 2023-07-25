import { createContext, useContext, useState } from "react";

//1.create context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2.share the context with other components
export default function AuthProvider({children}) {

    //3.put some state in context
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    function login(username, password) {
        if(username==='roshan' && password === 'dummy'){
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}