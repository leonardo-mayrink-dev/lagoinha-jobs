import { useEffect, useState } from "react";
import { CustomTable } from "./CustomTable";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid/models";
import { TTodo } from "../../types/example/TTodo";
import { Api } from "../../services/Api";
import { useTodos } from "../../hooks/useTodos";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "completed", headerName: "Completed", flex: 1 },
  { field: "title", headerName: "Title", flex: 3 },
  { field: "userId", headerName: "ID", flex: 1 },
];

export function MyRegularTable() {
  const [todos] = useTodos();

  return <CustomTable title={'My table'} columns={columns} rows={todos} />;
}
