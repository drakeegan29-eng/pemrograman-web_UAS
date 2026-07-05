import Sidebar from "../../components/Sidebar";

function Category() {
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
        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2>Kelola Kategori</h2>

          <button className="btn btn-primary">
            + Tambah Kategori
          </button>

        </div>

        <div
          style={{
            background: "#1e293b",
            borderRadius: "15px",
            padding: "25px",
          }}
        >

          <table className="table table-dark table-hover align-middle">

            <thead>

              <tr>
                <th>No</th>
                <th>Nama Kategori</th>
                <th>Dibuat</th>
                <th width="180">Aksi</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td>1</td>

                <td>Laptop</td>

                <td>05 Juli 2026</td>

                <td>

                  <button className="btn btn-warning btn-sm me-2">
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm">
                    Hapus
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default Category;