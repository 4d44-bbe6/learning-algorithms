import "./App.css";
import { useState } from "react";
import Sorting from "./components/Sorting";
import Pathfinding from "./components/Pathfinding";

function App() {
  const [currentMode, setCurrentMode] = useState("sorting");

  return (
    <div className="App">
      <div className="flex flex-row justify-center py-10">
        <button
          onClick={() => setCurrentMode("sorting")}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sorting
        </button>
        <button
          onClick={() => setCurrentMode("pathfinding")}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pathfinding
        </button>
      </div>
      {/* {currentMode === "sorting" ? <Sorting /> : <Pathfinding />} */}
      <Pathfinding />
    </div>
  );
}

export default App;
