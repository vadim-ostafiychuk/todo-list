import { Box } from "@mui/material";
import Todo from "./Todo";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function TodoList() {
  return (
    <Stack
      maxWidth={"520px"}
      marginInline={"auto"}
      component={"section"}
      divider={<Divider variant="middle" />}
      spacing={1}
    >
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </Stack>
  );
}

export default TodoList;
