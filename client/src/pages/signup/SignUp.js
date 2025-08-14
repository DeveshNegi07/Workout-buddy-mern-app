import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

require("./signupStyle.css");
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    setEmail("");
    setPassword("");
    // console.log(email, password);
  };
  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="field">
          <label>Email: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
