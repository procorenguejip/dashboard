import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../datatablesource";
import { useState } from "react";

const paginationModel = { page: 0, pageSize: 9 };

const Datatable = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  } 
  const actionColumn = [{
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
        return (
            <div className="cellAction">
                <div className="viewButton">
                    <span>View</span>
                </div>
                <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                    <span>Delete</span>
                </div>
            </div>
        )
    }
  }]
  return (
    <div className="datatable">
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  )
}

export default Datatable