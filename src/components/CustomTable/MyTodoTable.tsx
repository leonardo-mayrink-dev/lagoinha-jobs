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

export function MyTodoTable() {
  const [todos, setTodos] = useTodos();
  
  const handleChange = (ids: GridRowSelectionModel) => {
    setTodos((old) => old.filter((todo) => !ids.includes(todo.id)));
  };

  return (
    <CustomTable
      title="Today's todo list"
      columns={columns}
      rows={todos}
      checkboxSelection
      onRowSelectionModelChange={handleChange}
    />
  );
}
