import { useCallback, useEffect, useState, lazy } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GridColumnMenu } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { useGetUsersQuery } from "../customHooks/apiQuery";
import { palette } from "../theme";
import { userColumns } from '../constants/userTableColumns';
const DataGrid = lazy(
  () => import('@mui/x-data-grid').then(module => ({ default: module.DataGrid }))
);

const Users = () => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);
    const [paginationModel, setPaginationModel] = useState({ pageSize: 30, page: 0 });
    const [debounceHandler, setDebounceHandler] = useState(paginationModel);
    const [sortOption, setSortOption] = useState({ sortBy: "firstName", order: "asc" });
    const [sortDebounceHandler, setSortDebounceHandler] = useState(sortOption);

    const { data, isLoading, isError, error } = useGetUsersQuery(
        debounceHandler.page,
        debounceHandler.pageSize,
        sortDebounceHandler.sortBy,
        sortDebounceHandler.order
    );

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceHandler(paginationModel)
        }, 100);
        return () => clearTimeout(handler);
    }, [paginationModel]);

    useEffect(() => {
        const sortHandler = setTimeout(() => {
            setSortDebounceHandler(sortOption)
        }, 300);
        return () => clearTimeout(sortHandler);
    }, [sortOption]);

    const handleSortModelChange = useCallback((sortModel) => {
        sortModel.length && setSortOption({ sortBy: sortModel[0]?.field, order: sortModel[0]?.sort });
    }, []);

    const CustomColumnMenu = (props) => {
        return (
            <GridColumnMenu
                {...props}
                slots={{
                    // Hide `columnMenuColumnsItem`
                    columnMenuColumnsItem: null,
                }}
            />
        );
    }

    return (
        <Box m={2}>
            <Typography variant='h3' > Users </Typography>
            <Box mt={2} height={"80vh"}
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: `${colors.blue[400]} !important`,
                    }
                }}>
                <DataGrid
                    checkboxSelection
                    rows={data?.users}
                    columns={userColumns}
                    loading={isLoading}
                    paginationMode="server"
                    pageSizeOptions={[30]}
                    paginationModel={paginationModel}
                    onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
                    rowCount={data?.total || 0}
                    sortingMode="server"
                    onSortModelChange={handleSortModelChange}
                    disableRowSelectionOnClick
                    // disableColumnMenu
                    // disableColumnFilter
                    showToolbar
                    slots={{ columnMenu: CustomColumnMenu }}
                    slotProps={{
                        loadingOverlay: {
                            variant: 'skeleton',
                            noRowsVariant: 'skeleton',
                        },
                        columnsManagement: {
                            disableShowHideToggle: true
                        },
                        toolbar: {
                            showQuickFilter: false
                        },
                    }}
                />
            </Box>
        </Box>
    )
}

export default Users;