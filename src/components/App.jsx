import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import CategoryPage from './CategoryPage';
import NavBar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/category" exact component={CategoryPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
