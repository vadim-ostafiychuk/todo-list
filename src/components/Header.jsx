import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Header() {
  return (
    <>
      <Box component={"header"} sx={{ paddingTop: "2.5rem" }}>
        <Typography
          textTransform={"uppercase"}
          fontSize={"1.8rem"}
          fontWeight={"500"}
          textAlign={"center"}
          component="h1"
        >
          Todo list
        </Typography>
      </Box>
    </>
  );
}

export default Header;
