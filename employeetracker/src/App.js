import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Hero from "../src/components/Hero/index"


function App() {
  return (
    <Router>
      <div>
        <Hero />
        <Route exact patH="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
