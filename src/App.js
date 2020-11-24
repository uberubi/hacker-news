import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ItemPage from "./pages/ItemPage/ItemPage";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/item/:id" component={ItemPage} />
    </Container>
  );
}

export default App;
