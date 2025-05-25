"use client"

import { useGetTeamsQuery } from '@/state/api'
import React from 'react'
import { useAppSelector } from '../redux';
import Header from '@/components/Header';
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import { dataGridClassNames, dataGridSxStyles } from '@/libs/utils';

const customToolBar = () => (
    <GridToolbarContainer className='toolbar flex gap-2'>
        <GridToolbarFilterButton />
        <GridToolbarExport />
    </GridToolbarContainer>
)

const columns: GridColDef[] = [
    { field: "id", headerName: "Team ID", width: 100 },
    { field: "teamName", headerName: "Team Name", width: 200 },
    { field: "ProductOwnerUsername", headerName: "Product Owner", width: 200 },
    { field: "ProjectManagerUsername", headerName: "Project Manager", width: 200 },
]

const Teams = () => {
    const { data: teams, isLoading, isError } = useGetTeamsQuery();
    console.log(teams);
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    if (isLoading) return <div>Loading...</div>;
    if (isError || !teams) return <div>Error fetching teams</div>

    return (
        <div className='flex w-full flex-col p-8'>
            <Header name="Teams" />
            <div style={{ height: 650, width: "100%" }}>
                <DataGrid
                    rows={teams || []}
                    columns={columns}
                    pagination
                    slots={{
                        toolbar: customToolBar,
                    }}
                    className={dataGridClassNames}
                    sx={dataGridSxStyles(isDarkMode)}
                />
            </div>
        </div>
    )
}

export default Teams