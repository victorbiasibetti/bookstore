import React, { useState } from "react";

// import { Container } from './styles';
type LoginType = {
  email?: string;
  password?: string;
};

const Login: React.FC = () => {
  const [login, setLogin] = useState<LoginType>();

  const handleLogin = () => {
    console.log("login", login);
  };
  return (
    <div>
      <h2>Book Store</h2>
      <span>E-mail: </span>
      <input
        placeholder={"E-mail"}
        value={login?.email}
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
      />
      <span>Password: </span>
      <input
        type={"password"}
        placeholder={"Password"}
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
