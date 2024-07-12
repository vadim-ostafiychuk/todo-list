import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { grey } from "@mui/material/colors";

function Todo({ setIsClosedTodo, todo, openEditModal, removeTodo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      columnGap={"1rem"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position={"relative"}
      sx={{}}
    >
      <Checkbox
        checked={todo.isClosed}
        onChange={() => setIsClosedTodo(todo.id, !todo.isClosed)}
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
      />
      <Box flexGrow={1}>
        <Typography
          fontSize={"1.2rem"}
          fontWeight={"500"}
          lineHeight={"1"}
          sx={{
            textDecoration: todo.isClosed ? "line-through" : "none",
            color: todo.isClosed ? grey[500] : undefined,
            transition: "all .75s",
          }}
        >
          {todo.content}
        </Typography>
        <Typography variant="p" fontSize={"1rem"} fontStyle={"italic"}>
          {todo.category}
        </Typography>
      </Box>
      <Box
        sx={{}}
        display={isHovered ? "flex" : "none"}
        position={"absolute"}
        top={"5%"}
        right={"0"}
      >
        <IconButton onClick={() => openEditModal(todo.id)} aria-label="edit">
          <EditIcon sx={{ fontSize: "15px", transition: "all .75s" }} />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => removeTodo(todo.id)}>
          <DeleteIcon sx={{ fontSize: "15px", transition: "all .75s" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Todo;
