import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import {
  FaFolderOpen,
  FaBoxOpen,
  FaUserCircle,
} from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
          padding: "35px",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold">Dashboard</h2>
            <p style={{ color: "#94a3b8" }}>
              Selamat datang di CampusFind
            </p>
          </div>

          <div
            className="d-flex align-items-center"
            style={{
              background: "#1e293b",
              padding: "10px 18px",
              borderRadius: "12px",
            }}
          >
            <FaUserCircle
              size={35}
              style={{ marginRight: "10px" }}
            />

            <div>
              <div style={{ fontWeight: "bold" }}>
                Administrator
              </div>

              <small style={{ color: "#94a3b8" }}>
                Online
              </small>
            </div>
          </div>
        </div>

        {/* Statistik */}
        <div className="row">

          <div className="col-md-6 mb-4">
            <div
              style={{
                background: "#1e293b",
                borderRadius: "15px",
                padding: "30px",
              }}
            >
              <FaFolderOpen
                size={40}
                color="#38bdf8"
              />

              <h3 className="mt-3">Kategori</h3>

              <h1>0</h1>

              <Link
                to="/categories"
                className="btn btn-info mt-3"
              >
                Kelola Kategori
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              style={{
                background: "#1e293b",
                borderRadius: "15px",
                padding: "30px",
              }}
            >
              <FaBoxOpen
                size={40}
                color="#22c55e"
              />

              <h3 className="mt-3">
                Barang Hilang
              </h3>

              <h1>0</h1>

              <Link
                to="/items"
                className="btn btn-success mt-3"
              >
                Kelola Barang
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;