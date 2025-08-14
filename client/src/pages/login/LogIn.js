import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
require("./logInstyle.css");

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="field">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default LogIn;
