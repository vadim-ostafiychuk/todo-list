import Todo from "./Todo";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function TodoList({ setIsClosedTodo, todos, openEditModal, removeTodo }) {
  return (
    <Stack
      maxWidth={"520px"}
      marginInline={"auto"}
      component={"section"}
      divider={<Divider variant="middle" />}
      spacing={1}
    >
      {todos.map((todo) => (
        <Todo
          setIsClosedTodo={setIsClosedTodo}
          removeTodo={removeTodo}
          openEditModal={openEditModal}
          todo={todo}
          key={todo.id}
        />
      ))}
    </Stack>
  );
}

export default TodoList;
