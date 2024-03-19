import React from "react";
import {BrowserRouter as Router, useRoutes} from "react-router-dom";
import CountryList from "./views/CountryList";
import CountryDetail from "./views/CountryDetail";
import Navbar from "./components/Navbar";
import '../src/styles/container.css'


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <CountryList /> },
    { path: "/country-detail", element: <CountryDetail/> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <div className="container">
      <Navbar/>
      <Router>
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;