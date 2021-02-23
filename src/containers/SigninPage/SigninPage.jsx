import React from "react";
import { useRef, useState } from "react";
import "./SigninPage.scss";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function SigninPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/admin");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <div className="login-wrapper">
      <h2 className="title">Log In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="un " id="email">
          <label for="email">Email</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div className="pass" id="password">
          <label for="password">Password</label>
          <input type="password" ref={passwordRef} required />
        </div>
        <button className="submit" type="submit" disabled={loading}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default SigninPage;
