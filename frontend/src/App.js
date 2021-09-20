import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import MovieScreen from "./Screens/MovieScreen";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact="true" component={HomeScreen} />
        <Route path="/movies/:id" component={MovieScreen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
