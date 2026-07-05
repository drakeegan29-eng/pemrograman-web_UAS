import { Link } from "react-router-dom";
import {
  FaHome,
  FaFolder,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#111827",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "25px",
      }}
    >
      <h3 className="mb-5">
        CampusFind
      </h3>

      <ul
        className="list-unstyled"
        style={{ fontSize: "18px" }}
      >
        <li className="mb-4">
          <Link
            to="/dashboard"
            className="text-decoration-none text-white"
          >
            <FaHome /> Dashboard
          </Link>
        </li>

        <li className="mb-4">
          <Link
            to="/categories"
            className="text-decoration-none text-white"
          >
            <FaFolder /> Kategori
          </Link>
        </li>

        <li className="mb-4">
          <Link
            to="/items"
            className="text-decoration-none text-white"
          >
            <FaBoxOpen /> Barang
          </Link>
        </li>

        <hr />

        <li>
          <button
            className="btn btn-danger w-100"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;