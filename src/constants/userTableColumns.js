import { GRID_CHECKBOX_SELECTION_COL_DEF } from '@mui/x-data-grid';

export const userColumns = [
    {...GRID_CHECKBOX_SELECTION_COL_DEF, hideable: false},
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    { field: "email", headerName: "Mail ID", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1, sortable: false  },
    { field: "birthDate", headerName: "DOB" },
    { field: "department", headerName: "Department", flex: 1 , renderCell: (params) => params.row.company.department, sortable: false },
    { field: "title", headerName: "Designation", flex: 1 , renderCell: (params) => params.row.company.title, sortable: false },
    { field: "country", headerName: "Country", flex: 1 , renderCell: (params) => params.row.address.country, sortable: false }
]