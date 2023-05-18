import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { Box, Paper, Typography } from "@mui/material";

type TCustomTableProps = {
  title: string;
  columns: GridColDef[];
  rows: any[];
  checkboxSelection?: boolean;
  onRowSelectionModelChange?: (
    rowSelectionModel: GridRowSelectionModel
  ) => void;
};

export function CustomTable({
  title,
  columns,
  rows,
  checkboxSelection = false,
  onRowSelectionModelChange = () => {},
}: TCustomTableProps) {
  return (
    <Paper elevation={0} sx={{ borderRadius: 2 }}>
      <Box sx={{ height: 'auto', textAlign: "left" }} p={2}>
        <Typography variant="h5" my={2}>
          {title}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          autoHeight
          pageSizeOptions={[5]}
          checkboxSelection={checkboxSelection}
          onRowSelectionModelChange={onRowSelectionModelChange}
          disableRowSelectionOnClick
        />
      </Box>
    </Paper>
  );
}
