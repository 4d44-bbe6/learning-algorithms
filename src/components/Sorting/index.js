import React, { useEffect, useState } from "react";

import Sketch from "react-p5";
import { randomInt } from "../../lib/helpers";
import { quickSort } from "../../lib/quicksort";
import { mergeSort } from "./MergeSort/mergesort";
import Merge from "./MergeSort";

const Sorting = () => {
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");
  let w = 1;
  let values = [];
  let states = [];

  const colors = {
    background: "#494947",
    default: "#E6E6E6",
    sorting: "##35FF69",
    marking: "#D138BF",
  };

  useEffect(() => {
    resetDate();
  });

  const currentSorting = () => {
    switch (currentAlgorithm) {
      case "mergeSort": {
        return <Merge />;
      }
      default: {
        return "";
      }
    }
  };

  const resetDate = () => {
    values = new Array(Math.floor(1000 / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = randomInt(0, 500);
      states[i] = -1;
    }
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(colors.background);
    for (let i = 0; i < values.length; i++) {
      p5.noStroke();
      if (states[i] === 0) {
        p5.fill(colors.marking);
      } else if (states[i] === 1) {
        p5.fill(colors.sorting);
      } else {
        p5.fill(colors.default);
      }
      p5.rect(i * w, p5.height - values[i], w, values[i]);
    }
  };

  return (
    <div id="visual" className="flex flex-col items-center justify-center">
      <Sketch setup={setup} draw={draw} />
      <div className="flex pt-4">
        <button
          onClick={() => resetDate()}
          className="mx-4 bg-red-500 hoger:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset Data
        </button>
        <button
          onClick={() => {
            mergeSort(values);
            setCurrentAlgorithm("mergeSort");
          }}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Merge Sort
        </button>
        <button
          onClick={() => {
            setCurrentAlgorithm("quickSort");
            quickSort(values, 0, values.length - 1, states);
          }}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Quick Sort
        </button>
      </div>

      <div id="code" className="p-8 md:p-10 md:w-3/6">
        {currentSorting()}
      </div>
    </div>
  );
};

export default Sorting;
