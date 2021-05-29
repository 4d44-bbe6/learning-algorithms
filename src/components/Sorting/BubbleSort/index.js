import React from "react";

const Bubble = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Bubble Sort</h1>
      <div>
        <span className="font-bold">Analysis</span>
        <p className="pt-4">
          Bubble Sort is a comparison sorting algorithm that compares adjecent
          values and swaps them when needed.
        </p>
        <p className="pt-4">
          When running the sorting algorithm, we loop through the array and
          compare the current index with the array, which we loop through again.
          When the adjecent value is larger then the current index, we swap
          them.
        </p>
        <p className="pt-4">
          Since we're going through the array twice, the Time Complexity is O(n
          <sup>2</sup>)
        </p>
      </div>
    </>
  );
};

export default Bubble;
