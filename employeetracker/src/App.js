import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";

import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>

        <Wrapper>
          <Route exact path="/" component={Discover} />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
