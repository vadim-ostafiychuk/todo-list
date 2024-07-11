import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Button from "@mui/material/Button";
import { useState } from "react";
import TodoList from "./TodoList";

function Todos() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <Box>
      <Box
        component={"section"}
        display={"flex"}
        justifyContent={"space-between"}
        paddingTop={"18px"}
        paddingBottom={"1.875rem"}
        columnGap={"1rem"}
      >
        <FormControl sx={{ flexGrow: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            displayEmpty
            value={""}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">All</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          component="label"
          role={undefined}
          variant="contained"
        >
          {isDarkTheme ? <Brightness5Icon /> : <BedtimeOutlinedIcon />}
        </Button>
      </Box>
      <TodoList />
    </Box>
  );
}

export default Todos;
