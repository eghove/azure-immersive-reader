import React from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "./utils/api";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// PAGES
import ContactPage from "./components/Pages/Contact/ContactPage";
import ProductsPage from "./components/Pages/Products/ProductsPage";
import HomePage from "./components/Pages/Home/HomePage";
import NotFoundPage from "./components/Pages/NotFound/NotFoundPage";

function App() {
  // Below to validate the api utility retrieves the credentials needed.
  api.getAzImmersiveReaderCredentials();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
