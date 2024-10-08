import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./components/header";
import Navbar from "./components/navbar";
import RunsList from "./components/run-list";
import EditRun from "./components/edit-run";
import CreateRun from "./components/create-run";
import AboutApp from "./components/about-us";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="container">
        <Route path="/" exact component={RunsList} />
        <Route path="/uppdatera/:id" component={EditRun} />
        <Route path="/skapa" component={CreateRun} />
        <Route path="/om" component={AboutApp} />
      </div>
    </Router>
  );
}

export default App;
