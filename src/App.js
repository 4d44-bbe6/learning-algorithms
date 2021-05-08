import "./App.css";
import Sorting from "./components/Sorting";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row justify-center py-10">
        <button className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sorting
        </button>
        <button className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pathfinding
        </button>
      </div>
      <Sorting />
    </div>
  );
}

export default App;
