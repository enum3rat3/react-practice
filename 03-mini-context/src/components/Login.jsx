import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Username: </label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password: </label>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSumbit}>Submit</button>
    </div>
  );
}

export default Login;
