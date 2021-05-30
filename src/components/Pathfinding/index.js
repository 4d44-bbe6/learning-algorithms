import Astar from "./Astar";

const Pathfinding = () => {
  return (
    <div>
      <Astar />
      <div id="code" className="p-8 md:p-10 md:w-3/6 m-auto">
        <div>
          <h1>A*</h1>
          <p className="font-bold">Analysis</p>
          <p className="pt-4">
            A* is a Breadth First Search Algorithm that searches for shorter
            paths.
          </p>
          <p className="pt-4">
            A* uses the formula <span className="font-bold">f = g + h</span>{" "}
            durings it's course.
            <ul>
              <li>
                G is the cost of moving from one node to the other node and is
                the least cost from one node to the next node
              </li>
              <li>
                H is the heuristic path between the current node to the
                destination node.
              </li>
              <li>F is the parameter of A* which is the sum of G and H.</li>
            </ul>
          </p>
          <p className="pt-4">
            With the above variables we can explain the algorithm:
          </p>
          <p>
            <ul>
              <li>1. Within a grid, we set a start-node and end-node.</li>
              <li>2. We initialise two arrays, openSet and closedSet.</li>
              <li>3. We push the startNode to OpenSet.</li>
              <li>4. For all neighbouring nodes, find the least cost F node</li>
              <li>5. We push the current Node to the closedSet</li>
              <li>6. We loop through the current neighbours</li>
              <ul className="pt-4 pl-4">
                <li>a. If a neighbour is the endNode, we stop.</li>
                <li>
                  b. If a neighbour is a wall, or already in the closedSet, we
                  skip.
                </li>
                <li>
                  c. neighbour.g = neighbour.g + 1 (all nodes have a distance of
                  1 in our implementation)
                </li>
                <li>
                  d. We calculate the distance from the parent to neighbour by
                  calling the heuristic function
                </li>
                <li>
                  e. If a neighbour with a lower g (+ 1 distance) exists in the
                  openSet, skip this neighbour.
                </li>
              </ul>
              <li></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Pathfinding;
