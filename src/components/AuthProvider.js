import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   // Get the value from session storage.
   const sessionStorageValue = JSON.parse(sessionStorage.getItem("loggedIn")) || false;

   // Use this value as the default value for the state
   const [authed, setAuthed] = useState(sessionStorageValue);

   const login = async () => {
      const result = await fakeAsyncLogin();

      if (result) {
         console.log("User has logged in");

         setAuthed(true);
         sessionStorage.setItem("loggedIn", JSON.stringify(true));
      }
   };

   const logout = async () => {
      const result = await fakeAsyncLogout();

      if (result) {
         console.log("The User has logged out");
         setAuthed(false);
         sessionStorage.setItem("loggedIn", JSON.stringify(false));
      }
   };

   return (
      <AuthContext.Provider value={{ authed, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

// Define a custom hook to use the AuthContext
export const useAuth = () => {
   const context = useContext(AuthContext);

   if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
   }

   return context;
};

// Simulated asynchronous login and logout functions
const fakeAsyncLogin = async () => {
   // Simulate a network request
   await new Promise(resolve => setTimeout(resolve, 1000));
   return true;
};

const fakeAsyncLogout = async () => {
   // Simulate a network request
   await new Promise(resolve => setTimeout(resolve, 1000));
   return true;
};
