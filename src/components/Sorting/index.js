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

  const colors = {
    background: "#494947",
    default: "#E6E6E6",
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

  const runCurrentAlgorithm = () => {
    switch (currentAlgorithm) {
      case "mergeSort": {
        return mergeSort(values);
      }
      case "quickSort": {
        return quickSort(values, 0, values.length - 1);
      }
      default: {
        return;
      }
    }
  };

  const resetDate = () => {
    values = new Array(Math.floor(1000 / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = randomInt(0, 500);
    }
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(colors.background);
    for (let i = 0; i < values.length; i++) {
      p5.noStroke();
      p5.fill(colors.default);
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
            setCurrentAlgorithm("mergeSort");
          }}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Merge Sort
        </button>
        <button
          onClick={() => {
            setCurrentAlgorithm("quickSort");
          }}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Quick Sort
        </button>
      </div>
      <div id="start">
        <button
          onClick={() => runCurrentAlgorithm()}
          className="mx-4 my-4 bg-green-500 hoger:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Start
        </button>
      </div>
      <div id="code" className="p-8 md:p-10 md:w-3/6">
        {currentSorting()}
      </div>
    </div>
  );
};

export default Sorting;
