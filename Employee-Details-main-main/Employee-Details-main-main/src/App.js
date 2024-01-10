import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";
function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/table" element={<Table />}/>
      </Routes>
    </div>
  );
}

export default App;
