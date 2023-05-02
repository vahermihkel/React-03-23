import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom';

function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState();

  const login = () => {
    if (passwordRef.current.value === "123") {
      setLoggedIn(true);
      navigate("/admin");
      sessionStorage.setItem("token", "suvalisedTähedJaNumbrid");
    } else {
      setMessage("Password is not correct!");
    }
  }
 
  return (
    <div>
      <div>{message}</div>
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={passwordRef} type="text" /> <br />
      <button onClick={login}>Logi sisse</button>
    </div>
  )
}

export default Login