import React, { createContext, useEffect, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const url = "https://securetoken.googleapis.com/v1/token?key=AIzaSyDYj0NfwAAoIA1cjM3wLJcoFRG8lwrKb1w";

  const url2 = "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDYj0NfwAAoIA1cjM3wLJcoFRG8lwrKb1w";
  // function determineIfLoggedIn() {
  //   if (sessionStorage.getItem("token") !== null) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("id_token") !== null) {
      const payLoad = {
        "idToken": sessionStorage.getItem("id_token")
      }
  
      fetch(url2, {"method": "POST", "body": JSON.stringify(payLoad)})
        .then(res => res.json())
        .then(json => {
          console.log(json);
          if (json.error === undefined) {
            setLoggedInUser(json);
          }
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (sessionStorage.getItem("refresh_token") !== null) {
      const payLoad = {
        "grant_type": "refresh_token",
        "refresh_token": sessionStorage.getItem("refresh_token")
      }
  
      fetch(url, {"method": "POST", "body": JSON.stringify(payLoad)})
        .then(res => res.json())
        .then(json => {
            if (json.id_token !== undefined) {
              // return true;
              setLoggedIn(true);
            } else {
              // return false;
              setLoggedIn(false);
            }
        });
    }
  }, []);

  const emptyUser = () => {
    console.log("TÜHJENDASIN USERI");
    setLoggedInUser({});
    console.log(loggedInUser);
  }

  // MÕTE - kui oleks setLoggedInUser avalik, siis keegi saab määrata ka lehel uut userit

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, loggedInUser, emptyUser }}>
      {children}
    </AuthContext.Provider>
  );
};