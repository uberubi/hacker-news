import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Item from "./pages/Item/Item";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/item/:id" component={Item} />
    </Container>
  );
}

export default App;
