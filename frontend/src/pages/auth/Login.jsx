import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login berhasil");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Login gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow">
        <div className="card-body">

          <h2 className="text-center mb-4">
            CampusFind
          </h2>

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>

          </form>

          <div className="text-center mt-3">
            Belum punya akun?
            <Link to="/register">
              {" "}
              Register
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;