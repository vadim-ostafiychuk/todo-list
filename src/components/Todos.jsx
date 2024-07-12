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
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import {
  getTodos,
  removeTodo as removeTodoFromData,
  updateTodo,
} from "../data/data";

function Todos(props) {
  const { openEditModal, categories, setIsLightTheme, isLightTheme } = props;
  const [todos, setTodos] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const todos = getTodos({
      category: categorySelected,
      search,
    });

    setTodos(todos);
  }, [categorySelected]);

  const removeTodo = (id) => {
    removeTodoFromData(id);

    const todos = getTodos({
      category: categorySelected,
      search,
    });

    setTodos([...todos]);
  };

  const setIsClosedTodo = (id, isClosed) => {
    updateTodo(id, { isClosed });

    const todos = getTodos({
      category: categorySelected,
      search,
    });

    setTodos([...todos]);
  };

  const handleChangeCategoryFilter = (e) => {
    setCategorySelected(e.target.value);
  };

  const handleSearchClick = () => {
    const todos = getTodos({
      category: categorySelected,
      search,
    });

    setTodos(todos);
  };

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
            value={search}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
            onChange={(e) => setSearch(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleSearchClick} edge="end">
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
            onChange={handleChangeCategoryFilter}
            defaultValue={""}
            inputProps={{ "aria-label": "Select Category" }}
          >
            <MenuItem value="">All</MenuItem>
            {categories.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          onClick={() => setIsLightTheme(!isLightTheme)}
          component="label"
          role={undefined}
          variant="contained"
        >
          {isLightTheme ? <Brightness5Icon /> : <BedtimeOutlinedIcon />}
        </Button>
      </Box>
      <TodoList
        setIsClosedTodo={setIsClosedTodo}
        removeTodo={removeTodo}
        openEditModal={openEditModal}
        todos={todos}
      />
    </Box>
  );
}

export default Todos;
