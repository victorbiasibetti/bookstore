import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const cookies = new Cookies();

type LoginType = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const router = useRouter();
  const [login, setLogin] = useState<LoginType>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    console.log("login", login);
    fetch("http://localhost:3004/user")
      .then((res) => res.json())
      .then((result) => {
        if (
          result.email === login.email &&
          result.password === login.password
        ) {
          console.log("success");
          cookies.set("access_token", 1);
          router.push("/books");
        } else {
          console.log("error");
          setError("Usuário ou Senha incorretos");
        }
      });
  };
  return (
    <div>
      <h2>Book Store</h2>
      <span>E-mail: </span>
      <input
        placeholder={"E-mail"}
        value={login.email}
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
      />
      <span>Password: </span>
      <input
        type={"password"}
        placeholder={"Password"}
        value={login.password}
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>

      <span style={{ display: error ?? "show" }}> {error}</span>
    </div>
  );
};

export default Login;
