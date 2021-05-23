import React, { useEffect, useState } from "react";

import Sketch from "react-p5";
import { quickSort } from "./QuickSort/quicksort";
import { mergeSort } from "./MergeSort/mergesort";
import { bubbleSort } from "./BubbleSort/bubblesort";
import { heapSort } from "./HeapSort/heapsort";

import Merge from "./MergeSort";
import Quick from "./QuickSort";

const Sorting = () => {
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");
  let w = 10;
  let values = [];

  const colors = {
    background: "#494947",
    default: "#E6E6E6",
  };

  useEffect(() => {
    resetData();
  });

  const currentSorting = () => {
    switch (currentAlgorithm) {
      case "mergeSort": {
        return <Merge />;
      }
      case "quickSort": {
        return <Quick />;
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
        return quickSort(values);
      }
      case "bubbleSort": {
        return bubbleSort(values);
      }
      case "heapSort": {
        return heapSort(values);
      }
      default: {
        return;
      }
    }
  };

  const resetData = () => {
    values = new Array(100);
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

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div id="visual" className="flex flex-col items-center justify-center">
      <Sketch setup={setup} draw={draw} />
      <div className="flex pt-4">
        <button
          onClick={() => resetData()}
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
        <button
          onClick={() => {
            setCurrentAlgorithm("bubbleSort");
          }}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Bubble Sort
        </button>
        <button
          onClick={() => {
            setCurrentAlgorithm("heapSort");
          }}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Heap Sort
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
