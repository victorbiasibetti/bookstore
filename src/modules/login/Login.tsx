import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import request from "../../services/request";

const cookies = new Cookies();

type LoginType = {
  id: number;
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const router = useRouter();
  const [login, setLogin] = useState<LoginType>({
    id: 0,
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    console.log("login", login);
    try {
      const { data }: { data: Array<LoginType> | null } = await request.get(
        "/users"
      );

      if (data) {
        const user = data.find(
          (user) => user.email == login.email && user.password == login.password
        );
        cookies.set("access_token", user?.id);
      }
    } catch (e) {
      setError("usuário ou senha incorreto");
    }
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
