import "./App.css";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Todos from "./components/Todos";
import EditTodoModal from "./components/EditTodoModal";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Header />
        <Todos />
      </Container>
      <EditTodoModal isOpen={true} />
    </>
  );
}

export default App;
