import React from "react";

const Quick = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Quick Sort</h1>
      <div>
        <span className="font-bold">Analysis</span>
        <p className="pt-4">
          Quicksort is a divide and conquer recursive algorithm.
        </p>
        <p>
          The algorithm picks a pivot using the partition function (in this
          implementation always the last item of the array) and divides the
          array into two sub-arrays. One sub-array for all values lower then the
          pivot-value, and one sub-array for all values higher then the
          pivot-value.
        </p>
        <p className="pt-4">
          Each subarray is then recursively passed to the quickSort function.
        </p>
        <p className="pt-4">
          The partition function
          <ul>
            <li>
              1. Set the pivotValue to the last item of the array (endIndex).
            </li>
            <li>
              2. Set the current pivotIndex to the first item of the array
              (startIndex).
            </li>
            <li>
              3. Loop through the array, finding values that are less then the
              pivotValue. If found, swap this item, array[i] with
              array[pivotIndex]. Else, swap the value of array[pivotIndex] with
              array[endIndex].
            </li>
            <li>4. We return the current pivotIndex.</li>
          </ul>
        </p>
        <p className="pt-4">Big-O run-time analysis:</p>
        <p className="pt-4">
          Ideally we always divide the array into two partitions of equal size.
          However, in this implementation that is not always the case. If the
          number of elements n is doubled, we need to call partition once more.
          Therefore the partitioning costs us O(log<sub>2</sub>n)
        </p>
        <p className="pt-4">
          In the partition function, we loop through the array once. O(n).
        </p>
        <p className="font-bold pt-4">
          Therefore, the time complexity is O(nlogn)
        </p>
      </div>
    </>
  );
};

export default Quick;
