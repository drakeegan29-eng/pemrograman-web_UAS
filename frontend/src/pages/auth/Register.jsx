import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(response.data.message);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Register gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 450 }}>
      <div className="card shadow">

        <div className="card-body">

          <h2 className="text-center mb-4">
            Register
          </h2>

          <form onSubmit={handleRegister}>

            <div className="mb-3">
              <label>Nama</label>
              <input
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

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
              className="btn btn-success w-100"
              disabled={loading}
            >
              {loading ? "Loading..." : "Register"}
            </button>

          </form>

          <div className="text-center mt-3">

            Sudah punya akun?

            <Link to="/">
              Login
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;