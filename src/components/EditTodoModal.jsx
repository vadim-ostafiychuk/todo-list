import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, DialogActions, Button } from "@mui/material";

function EditTodoModal(props) {
  const { isOpen, handleClickOpen } = props;

  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={"sm"}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
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
          EDIT NOTE #1
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Edit your note"
            multiline
            fullWidth={true}
            sx={{ margin: 1, marginInline: 0 }}
            maxRows={12}
          />
        </DialogContent>
        <DialogActions
          sx={{
            paddingInline: 0,
            justifyContent: "space-between",
            marginTop: "128px",
          }}
          disableSpacing={true}
        >
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleClose}>APPLY</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default EditTodoModal;
