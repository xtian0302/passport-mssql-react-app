import { React, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/getUser",
    }).then((res) => console.log(res));
  };

  const register = async () => {
    await axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      {/* Registration Form */}
      <h1>Register</h1>
      <input
        placeholder="username"
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register}>Submit</button>

      {/* Login Form */}
      <h1>Login</h1>
      <input
        placeholder="username"
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={login}>Submit</button>

      {/* Get USer */}
      <h1>Get User</h1>
      <button onClick={getUser}>Submit</button>
    </div>
  );
}

export default App;
