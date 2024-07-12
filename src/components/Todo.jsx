import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { grey } from "@mui/material/colors";

function Todo() {
  const [isClose, setIsClose] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = () => {
    setIsClose(!isClose);
  };

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
        checked={isClose}
        onClick={() => handleClose()}
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
      />
      <Typography
        variant="body1"
        flexGrow={1}
        fontSize={"1.2rem"}
        fontWeight={"500"}
        lineHeight={"1"}
        sx={{
          textDecoration: isClose ? "line-through" : "none",
          color: isClose ? grey[500] : undefined,
          transition: "all .75s",
        }}
      >
        Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
      <Box
        sx={{}}
        display={isHovered ? "flex" : "none"}
        position={"absolute"}
        top={"5%"}
        right={"0"}
      >
        <IconButton
          onClick={() => {
            console.log("GG");
          }}
          aria-label="edit"
        >
          <EditIcon sx={{ fontSize: "15px", transition: "all .75s" }} />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => {}}>
          <DeleteIcon sx={{ fontSize: "15px", transition: "all .75s" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Todo;
