import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SingleItem from "./pages/ItemPage/ItemPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Container>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/item/:id" component={SingleItem} />
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
