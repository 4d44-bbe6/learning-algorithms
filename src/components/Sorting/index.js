import React from "react";
import { useEffect } from "react";
import Sketch from "react-p5";
import { randomInt } from "../../lib/helpers";
import { quickSort } from "../../lib/quicksort";
import { mergeSort } from "../../lib/mergesort";

const Sorting = () => {
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
          onClick={() => mergeSort(values)}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Merge Sort
        </button>
        <button
          onClick={() => {
            quickSort(values, 0, values.length - 1, states);
          }}
          className="mx-4 bg-blue-500 hoger:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Quick Sort
        </button>
      </div>

      <div id="code" className="p-8 md:p-10 md:w-3/6">
        <p>
          We call the Merge Sort algorithm by running the mergeSort function
          with the the following parameters:
        </p>
        <ul>
          <li>
            <span className="font-bold">1. </span>The array containing all the
            random data.
          </li>
          <li>
            <span className="font-bold">2. </span>The first element as
            startIndex (0)
          </li>
          <li>
            <span className="font-bold">3. </span>The last element of the array
            as endIndex
          </li>
        </ul>

        <p>
          <span className="font-bold">Note:</span> in trying to avoid having to
          use multiple arrays for the division (left, right) we keep track of
          the elements to be sorted and merge with a startIndex, middleIndex and
          endIndex.
        </p>
        <pre>
          {`
mergeSort(values, 0, values.length)}
        `}
        </pre>
        <p>
          In the mergeSort function we check if we need to further divide the
          (sub)array. When we do we find a new middleIndex and recursively call
          mergeSort again for both divisions. When this resolves, we call the
          merge function.
        </p>
        <pre>{`
export const mergeSort = async (array, startIndex, endIndex) => {
  if (endIndex - startIndex > 1) {
    let middleIndex = startIndex + ((endIndex - startIndex) >> 1);
    await mergeSort(array, startIndex, middleIndex);
    await mergeSort(array, middleIndex + 1, endIndex);
    await merge(array, startIndex, middleIndex, endIndex);
  }
};

const merge = async (array, startIndex, middleIndex, EndIndex) => {
  let tmp = [];
  let length = middleIndex - startIndex;
  let j, k;

  for (let i = 0; i < length; i++) {
    tmp[i] = array[startIndex + i];
  }

  j = middleIndex;
  k = startIndex;
  let i = 0;
  while (i < length && j < EndIndex) {
    if (tmp[i] <= array[j]) {
      await sleep(1);

      array[k++] = tmp[i++];
    } else {
      await sleep(1);
      array[k++] = array[j++];
    }
  }

  while (i < length) {
    await sleep(1);
    array[k++] = tmp[i++];
  }
};
        `}</pre>
      </div>
    </div>
  );
};

export default Sorting;
