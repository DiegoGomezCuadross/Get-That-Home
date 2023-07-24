import { createContext, useContext, useEffect, useState } from "react";

import { createUser, getUser, updateUser } from "../service/users-service";
import * as session from "../service/sessions-service";
import { tokenKey } from "../config";
// import LoadingImage from "../images/cover.png";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // function login(credentials) {
  //   session.login(credentials).then(setUser).catch(console.log);
  // }

  function login(credentials) {
    console.log('login called with credentials:', credentials);
    session
      .login(credentials)
      .then((user) => {
        console.log('login successful, user data:', user);
        setUser(user);
      })
      .catch((error) => {
        console.log('login error:', error);
      });
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  function updateProfile(userData) {
    updateUser(userData).then(setUser).catch(console.log);
  }
  function logout() {
    session.logout().then(() => {
      setUser(null);
      sessionStorage.removeItem(tokenKey);
    });
  }

  // if (loading) return <img src={LoadingImage} alt="Loading ..."></img>;

  const value = {
    user,
    login,
    signup,
    logout,
    updateProfile,
  };

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => console.log(error));
  }, []);

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
