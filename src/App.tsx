import Filter from "./components/Filter";
import InputTask from "./components/InputTask";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="todo container">
      <Navbar />
      <InputTask />
    </main>
  );
}

export default App;
