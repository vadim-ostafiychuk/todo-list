import "./App.css";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Todos from "./components/Todos";
import EditTodoModal from "./components/EditTodoModal";
import CreateTodoModal from "./components/CreateTodoModal";
import { ThemeProvider, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategories } from "./data/data";
import { darkTheme, defaultTheme } from "./theme";
import AddTodoButton from "./components/AddTodoButton";

import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [todoId, setTodoId] = useState();
  const [categories, setCategories] = useState([]);
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    setCategories([...getCategories()]);
  }, []);

  const openEditModal = (todoId = null) => {
    setTodoId(todoId);

    setIsOpenEditModal(true);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
    setTodoId(null);
  };

  const openCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  const closeCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  return (
    <>
      <ThemeProvider theme={isLightTheme ? defaultTheme : darkTheme}>
        <CssBaseline />
        <Container
          maxWidth="md"
          sx={{ position: "relative", minHeight: "100vh" }}
        >
          <Header />
          <Todos
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
            categories={categories}
            openEditModal={openEditModal}
          />
          <AddTodoButton openCreateModal={openCreateModal} />
        </Container>
        <EditTodoModal
          categories={categories}
          closeEditModal={closeEditModal}
          isOpen={isOpenEditModal}
          todoId={todoId}
        />
        <CreateTodoModal
          categories={categories}
          closeModal={closeCreateModal}
          isOpen={isOpenCreateModal}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
