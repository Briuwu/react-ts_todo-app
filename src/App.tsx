import { useState } from "react";
import Filter from "./components/Filter";
import InputTask from "./components/InputTask";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <main className="app">
      <div className="container">
        <Navbar />
        <InputTask />
        <Tasks />
        <Filter />
      </div>
    </main>
  );
}

export default App;
