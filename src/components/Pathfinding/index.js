import { Component } from "react";
// import Sketch from "react-p5";

export default class Pathfinding extends Component {
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 1000).parent(canvasParentRef);
    this.width = p5.windowWidth;
    this.height = p5.windowHeight;

    this.cols = this.width / 10;
    this.rows = this.height / 10;

    this.colors = {
      default: "#494947",
      background: "#E6E6E6",
    };
  };

  draw = (p5) => {
    for (let j = 0; j < this.rows; j++) {
      for (let i = 0; i < this.cols; i++) {
        p5.stroke(0);
        p5.fill(this.colors.background);
        p5.rect(
          0 + i * this.width,
          0 + j * this.height,
          this.width,
          this.height
        );
      }
    }
  };
}
//   let cols = 20;
//   let rows = 20;
//   let w, h;
//   let grid = Array(cols);

//   const resetData = () => {
//     for (let i = 0; i < cols; i++) {
//       grid[i] = new Array(rows);
//     }
//   };

//   const draw = (p5) => {

//   };

//   return (
//     <div id="visual" className="flex flex-col items-center justify-center">
//       <Sketch setup={setup} draw={draw} />
//     </div>
//   );
// };

// export default Pathfinding;
