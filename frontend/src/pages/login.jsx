import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice"; // Import your async thunk
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth || {}); // Safeguard for undefined state
  const { loading, error, token } = authState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (token) {
      router.push("/dashboard"); // Redirect to dashboard if already logged in
    }
  }, [token, router]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
