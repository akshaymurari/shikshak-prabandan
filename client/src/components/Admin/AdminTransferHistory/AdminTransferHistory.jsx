import React from "react";

function AdminTransferHistory() {
  const tranData = {
    trasfer: [
      {
        id: 180203,
        name: "ramesh",
        pos: "S.G.T",
        from_schl: "mpups",
        to_schl: "mpups",
        salary: "8,90,000",
        trans_date: "28-09-2009",
        tlink: "#",
      },
    ],
  };

  return (
    <>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Transfers</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/admindashboard">Home</a>
                      </li>
                      <li className="breadcrumb-item">Transfers</li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Transfer History
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Simple Datatable start */}
            <div className="card-box mb-30">
              <div className="pd-20">
                <h4 className="text-blue h4">Recent Tranfers</h4>
              </div>
              <div className="pb-20">
                <table className="data-table datatable-nosort  table table-responsive-lg stripe hover">
                  <thead className="thead-dark">
                    <tr>
                      <th className="table-plus datatable-nosort">
                        Teacher ID
                      </th>
                      <th>Teacher Name</th>
                      <th>Postion</th>
                      <th>From School</th>
                      <th>To School</th>
                      <th>Salary</th>
                      <th>Tranfer Date</th>
                      <th className="datatable-nosort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tranData.trasfer.map(function (td, i) {
                      return (
                        <tr>
                          <td className="table-plus">{td.name}</td>
                          <td>{td.name}</td>
                          <td>{td.pos}</td>
                          <td>{td.from_schl}</td>
                          <td>{td.to_schl}</td>
                          <td>{td.salary}</td>
                          <td>{td.trans_date}</td>
                          <td>
                            <a
                              className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                              href={td.tlink}
                              role="button"
                            >
                              <i className="dw dw-eye" />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminTransferHistory;
