import { createContext, useState } from "react";

//1.create context
export const AuthContext = createContext()

//2.share the context with other components
export default function AuthProvider({children}) {

    //3.put some state in context
    const [number, setNumber] = useState(10)
    return (
        <AuthContext.Provider value={ {number} }>
            {children}
        </AuthContext.Provider>
    )
}