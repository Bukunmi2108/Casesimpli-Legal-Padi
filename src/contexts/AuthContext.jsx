import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = "http://localhost:8000/api/v1";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const storedData = localStorage.getItem('authData');
    if (storedData) {
      const { accessToken: storedAccessToken, refreshToken: storedRefreshToken, user: storedUser } = JSON.parse(storedData);
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setUser(storedUser);
    }
  }, []);

  const getUserRole = () => {
    const storedData = localStorage.getItem('authData');
    if (storedData) {
      const { user: storedUser } = JSON.parse(storedData);
      return storedUser.role
    }
  }

  const fetchUser = (accessToken) => {
    setIsLoading(true)
    
    axios.get(`${baseUrl}/user/profile`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      const user = response.data
      setUser(user);

      localStorage.setItem('authData', JSON.stringify({ accessToken, refreshToken, user }));

      setIsLoading(false); 

      return user  
    })
  };

  const login = async (accessToken, refreshToken) => {

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    localStorage.removeItem('authData');
  };



  return (
    <AuthContext.Provider value={{
      accessToken,
      refreshToken,
      user,
      isLoading,
      error,
      login,
      logout,
      fetchUser,
      getUserRole,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };