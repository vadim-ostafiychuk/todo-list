import "./App.css";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Header />
        <Todos />
      </Container>
    </>
  );
}

export default App;
