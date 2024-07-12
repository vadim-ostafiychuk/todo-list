import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function AddTodoButton(props) {
  const { openCreateModal } = props;

  return (
    <Fab
      onClick={openCreateModal}
      sx={{ position: "absolute", bottom: "32px", right: "10%" }}
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Fab>
  );
}

export default AddTodoButton;
