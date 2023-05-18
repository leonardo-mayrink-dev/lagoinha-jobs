import { useState, useEffect } from "react";
import { Api } from "../services/Api";
import { TTodo } from "../types/example/TTodo";
import { Grid, Typography, Button } from "@mui/material";
export function RequestsExamples() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [postedTodo, setPostedTodo] = useState<TTodo>();
  const [updatedTodo, setUpdatedTodo] = useState<TTodo>();

  const handleGetClick = () => {
    Api.get<TTodo[]>("https://jsonplaceholder.typicode.com/todos");
  };
  const handlePostClick = () => {
    Api.post<TTodo>("https://jsonplaceholder.typicode.com/todos", {
      id: 100,
      completed: true,
      title: "my new todo hahaha",
      userId: 10,
    });
  };
  const handlePutClick = () => {
    Api.put<TTodo>("https://jsonplaceholder.typicode.com/todos/1", {
      id: 1,
      completed: true,
      title: "new title",
      userId: 10,
    });
  };
  const handleDeleteClick = () => {
    Api.delete("https://jsonplaceholder.typicode.com/todos/1");
  };

  return (
    <Grid
      container
      py={8}
      spacing={{ xs: 2, md: 6 }}
      sx={{ height: "100vh" }}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Grid item sm={12}>
        <Typography variant="h1" color={"primary.light"}>
          Request center
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button variant="outlined" color="secondary" onClick={handleGetClick}>
          GET
        </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button variant="outlined" color="secondary" onClick={handlePostClick}>
          POST
        </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button variant="outlined" color="secondary" onClick={handlePutClick}>
          PUT
        </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleDeleteClick}
        >
          DELETE
        </Button>
      </Grid>
    </Grid>
  );
}
