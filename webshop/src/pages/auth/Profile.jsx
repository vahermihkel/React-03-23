import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../store/AuthContext';

function Profile() {
  const nameRef = useRef();
  const urlRef = useRef();
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDYj0NfwAAoIA1cjM3wLJcoFRG8lwrKb1w";
  const { loggedInUser } = useContext(AuthContext);

  const changeProfile = () => {
    const payLoad = {
      "idToken": sessionStorage.getItem("id_token"),
      "displayName": nameRef.current.value,
      "photoUrl": urlRef.current.value,
      "returnSecureToken": false
    }
    fetch(url, {"method": "POST", "body": JSON.stringify(payLoad)})
      .then(res => res.json())
      .then(json => console.log(json));
  }

  return (
    <div>
      {loggedInUser.users !== undefined &&
        <div>
          <label>Display Name</label> <br />
          <input ref={nameRef} type="text" defaultValue={loggedInUser.users[0].displayName} /> <br />
          <label>Photo URL</label> <br />
          <input ref={urlRef} type="text" defaultValue={loggedInUser.users[0].photoUrl} /> <br />
          <button onClick={changeProfile}>Change</button>
        </div>}
    </div>
  )
}

export default Profile