import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [message,setMessage] = useState('');
    const login = async (email, password) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, { email, password });
            if (res.data.success) {
                setUser(res.data.user);
                setLoggedIn(true);
                toast.success("Logged in");
            } else {
                toast.error("Login failed");
            }
        } catch (error) {
            toast.error("An error occurred during login");
        }
    };

    const register = async (name, email, password) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`,{ name, email, password });
            setMessage(res.data.message);
          
                setUser(res.data.user);
                toast.success(res.data.message);
                
          
        } catch (error) {
          
            toast.error('Error occured')
        
        }
    };

    const logout = () => {
        setLoggedIn(false);
        setUser(null);
        toast.success('Logged OUT');
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
