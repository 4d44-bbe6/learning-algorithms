import { useState, useEffect } from "react";
import Node from "./Node";
import { astar } from "./astar";

const Astar = () => {
  const [grid, setGrid] = useState([]);
  const [path, setPath] = useState([]);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [currentStatus, setCurrentStatus] = useState(
    "Run A* to find a path from start-node (green) to end-node(red)"
  );

  const cols = 20;
  const rows = 20;

  const NODE_START_ROW = 0;
  const NODE_START_COL = 0;
  const NODE_END_ROW = cols - 1;
  const NODE_END_COL = rows - 1;

  useEffect(() => {
    initializeGrid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const initializeGrid = () => {
    const grid = new Array(rows);

    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols);
    }

    createSpot(grid);
    setGrid(grid);
    addNeighbours(grid);
    const startNode = grid[NODE_START_ROW][NODE_START_COL];
    const endNode = grid[NODE_END_ROW][NODE_END_COL];
    startNode.isWall = false;
    endNode.isWall = false;
    let path = astar(startNode, endNode);

    setPath(path.path);
    setVisitedNodes(path.visitedNodes);
    path.error
      ? setCurrentStatus(path.error)
      : setCurrentStatus("Path found! Run a* to see it visualized.");
  };

  const createSpot = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  };

  // Add neighbours
  const addNeighbours = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j].addNeighbours(grid);
      }
    }
  };

  class Spot {
    constructor(i, j) {
      this.x = i;
      this.y = j;

      this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
      this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
      this.g = 0;
      this.f = 0;
      this.h = 0;

      Math.random(1) < 0.3 ? (this.isWall = true) : (this.isWall = false);
      this.neighbours = [];
      this.previous = undefined;
      this.addNeighbours = function (grid) {
        let i = this.x;
        let j = this.y;
        if (i > 0) this.neighbours.push(grid[i - 1][j]);
        if (i < rows - 1) this.neighbours.push(grid[i + 1][j]);
        if (j > 0) this.neighbours.push(grid[i][j - 1]);
        if (j < cols - 1) this.neighbours.push(grid[i][j + 1]);
      };
    }
  }

  const visualizeShortestPath = (shortestPath) => {
    for (let i = 0; i < shortestPath.length; i++) {
      setTimeout(() => {
        const node = shortestPath[i];
        document.getElementById(`node-${node.x}-${node.y}`).className =
          "node node-shortest-path";
      }, 2 * i);
    }
  };

  const visualizePath = () => {
    setCurrentStatus("Running algorithm..");
    for (let i = 0; i <= visitedNodes.length; i++) {
      if (i === visitedNodes.length) {
        // eslint-disable-next-line no-loop-func
        setTimeout(() => {
          visualizeShortestPath(path);
        }, 5 * i);
      } else {
        setTimeout(() => {
          const node = visitedNodes[i];
          document.getElementById(`node-${node.x}-${node.y}`).className =
            "node node-visited";
        }, 5 * i);
      }
    }
    setCurrentStatus("Algorithm finished..");
  };

  const gridWithNode = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((col, colIndex) => {
              const { isStart, isEnd, isWall } = col;
              return (
                <Node
                  key={colIndex}
                  isStart={isStart}
                  isEnd={isEnd}
                  row={rowIndex}
                  col={colIndex}
                  isWall={isWall}
                />
              );
            })}
          </div>
        ))}
        <div className="flex pt-4">
          <button
            onClick={() => refreshPage()}
            className="mx-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset Data
          </button>

          <button
            onClick={() => visualizePath()}
            className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            A*
          </button>
        </div>
        <div className="my-4">
          <h2>{currentStatus}</h2>
        </div>
        <div>
          <h1>A* search algorithm</h1>
        </div>
      </div>
    );
  };

  return <div>{gridWithNode()}</div>;
};

export default Astar;
