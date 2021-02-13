import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./utils/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Bootstrap imports
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
// Navbar import
import NavBar from "./components/Pages/Shared/NavBar";
// PAGES
import ContactPage from "./components/Pages/Contact/ContactPage";
import ProductsPage from "./components/Pages/Products/ProductsPage";
import HomePage from "./components/Pages/Home/HomePage";
import NotFoundPage from "./components/Pages/NotFound/NotFoundPage";

function App() {
  // STATE
  const [accessToken, setAccessToken] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [
    apiAzImmersiveReaderCredError,
    setapiAzImmersiveReaderCredError,
  ] = useState(false);

  // helper function to set states with Az credentials
  const getAzImmersiveReaderCreds = async () => {
    let results = await api.getAzImmersiveReaderCredentials();
    if (results.data.access_token && results.data.subdomain) {
      setAccessToken(results.data.access_token);
      setSubdomain(results.data.subdomain);
    } else {
      setapiAzImmersiveReaderCredError(true);
    }
  };

  // wrapping getAzImmeriveReaderCreds is a useEffect with empty arayto make sure it only happens once, on initial load.
  useEffect(() => {
    getAzImmersiveReaderCreds();
  }, []);

  return (
    <Router>
      <Container fluid>
        <div className="App">
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/products">
              <ProductsPage accessToken={accessToken} subdomain={subdomain} />
            </Route>
            <Route exact path="/contact">
              <ContactPage accessToken={accessToken} subdomain={subdomain} />
            </Route>
            <Route exact path="/">
              <HomePage accessToken={accessToken} subdomain={subdomain} />
            </Route>
            <Route>
              <NotFoundPage accessToken={accessToken} subdomain={subdomain} />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
