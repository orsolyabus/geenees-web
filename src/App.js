import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import CategoryPage from './CategoryPage';

function App() {
  return (
    <div className="App">
      <header className="">
        <p>
          Geenees
        </p>
      </header>
      <Login />
      <CategoryPage />
    </div>
  );
}

export default App;
