import { Box, Grid, Divider, Paper, Typography, Button, Link } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const cols = [
    { field: 'name', headerName: 'Name', minWidth: 230 },
    { field: 'username', headerName: 'Username', minWidth: 200 },
    {
        field: 'email',
        headerName: 'Email',
        minWidth: 270,

    },
    {
        field: 'action',
        type: "actions",
        headerName: 'Action',
        minWidth: 170,
        getActions: (params) => [
            <Button variant="outlined" color="info">Edit</Button>,
            <Button variant="outlined" color="error">Delete</Button>
        ],

    },
];
function createData(name, username, email) {
    return { name, username, email };
}
const rows = [
    { "id": 11, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 12, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 13, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 14, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 15, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 16, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 17, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 18, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 19, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 20, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 21, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 22, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 23, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 24, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 25, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 26, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 27, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 27, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 27, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 27, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 27, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 27, "name": "India", "username": "IN", "email": "12@gmaio.com" },
    { "id": 27, "name": "India", "username": "IN", "email": "12@gmaio.com" },
];



export default function admin_manageuser() {

 

    return (
        <>
            <Box padding={5}>
                <Typography variant="h5" style={{ fontWeight: 'bold',marginBottom:'25px' }}>Manage User</Typography>

                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', height: 600 }}>
                        <div style={{ flexGrow: 1 }}>
                            <DataGrid
                                rows={rows}
                                columns={cols}
                                checkboxSelection
                                disableSelectionOnClick
                            />
                        </div>

                    </div>
                </Paper>

            </Box>

        </>
    )
}