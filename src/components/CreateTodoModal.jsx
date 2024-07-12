import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { TextField, DialogActions, Button, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { getTodo, updateTodo, createTodo } from "../data/data";

const initialState = {
  content: "",
  isClosed: false,
  category: "",
};

function CreateTodoModal(props) {
  const { isOpen, closeModal, categories } = props;
  const [todo, setTodo] = useState(initialState);

  const handleApplyEdit = () => {
    createTodo(todo);

    closeModal();
  };

  const handleCloseModal = () => {
    setTodo(initialState);

    closeModal();
  };

  return (
    <Dialog
      open={isOpen}
      fullWidth={true}
      maxWidth={"sm"}
      onClose={handleCloseModal}
    >
      <Box sx={{ paddingInline: "30px" }}>
        <DialogTitle
          sx={{
            textAlign: "center",
            paddingTop: "18px",
            paddingBottom: "25px",
            fontSize: "24px",
            textTransform: "uppercase",
            fontWeight: "500",
          }}
        >
          CREATE NOTE
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Edit your note"
            name="content"
            multiline
            value={todo.content}
            fullWidth={true}
            sx={{ margin: 1, marginInline: 0 }}
            onChange={(e) => setTodo({ ...todo, content: e.target.value })}
            maxRows={12}
          />
          <TextField
            defaultValue={todo.category}
            select
            label="Select"
            value={todo.category}
            onChange={(event) => {
              setTodo({ ...todo, category: event.target.value });
            }}
            helperText="Please select category"
          >
            <MenuItem key="" value="">
              None
            </MenuItem>
            {categories.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions
          sx={{
            paddingInline: 0,
            justifyContent: "space-between",
            marginTop: "128px",
          }}
          disableSpacing={true}
        >
          <Button onClick={handleCloseModal}>CANCEL</Button>
          <Button onClick={() => handleApplyEdit()}>APPLY</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default CreateTodoModal;
