import React , {useState, createContext, useContext} from 'react';


const AuthContext = createContext();

const AuthProvider = ({children}) =>
{
    const[user,setUser] = useState(null);
    const [loggedIn,setloggedIn] = useState(false);

    return (

        <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuth= ()=>
    {
        return useContext(AuthContext);
    }
export {AuthProvider,useAuth};