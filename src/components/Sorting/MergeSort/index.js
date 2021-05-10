import React from "react";
import { mergeSort, merge } from "./mergesort";

const Merge = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Merge Sort</h1>
      <p className="py-2">
        We call the Merge Sort algorithm by running the mergeSort function with
        the the following parameters:
      </p>
      <ul>
        <li>
          <span className="font-bold">1. </span>The array containing all the
          random data.
        </li>
        <li>
          <span className="font-bold">2. </span>The first element as startIndex
          (0)
        </li>
        <li>
          <span className="font-bold">3. </span>The last element of the array as
          endIndex
        </li>
      </ul>

      <p className="py-2">
        <span className="font-bold">Note:</span> in trying to avoid having to
        use multiple arrays for the division (left, right) we keep track of the
        elements to be sorted and merge with a startIndex, middleIndex and
        endIndex.
      </p>
      <pre>
        {`
mergeSort(values, 0, values.length)}
        `}
      </pre>
      <p className="py-2">
        In the mergeSort function we check if we need to further divide the
        (sub)array. We divide until we have multiple subarrays with a single
        element in it. This process is done recursively by calling mergeSort
        again. When both mergeSort functions resolve, we call the merge
        function.
      </p>
      <pre>
        {`
export const mergeSort = ${mergeSort}
        `}
      </pre>
      <p className="py-2">
        In the merge section we take in the entire array as well as the indices
        to determine the part we're merging. While merging we compare the values
        added to a temporary array with the values of the elements after the
        middle index. In other words: we're comparing values of 'left' and
        'right' items.
      </p>

      <p className="py-2">
        If there are still items on the 'left' side and there are no items to
        compare them to, we add them back to the array.
      </p>
      <pre>{`
const merge = ${merge}
        `}</pre>
      <div>
        <span className="font-bold">Big-O Analysis</span>
        <p>
          Merge sort is a divide and conquer algorithm with the following steps:
        </p>
        <ul>
          <li>
            <p>
              <span className="font-bold">1. </span>
              The divide step calculates the middle of each (sub)array. This
              step takes O(1) time.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">2. </span>
              The conquer step recursively divides both subarrays (left and
              right). <span className="font-bold">log&#178;(n)</span>
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">3. </span>
              The merge step merges elements from both subarrays (left and
              right). This step takes O(n) time
            </p>
          </li>
        </ul>
        <p className="py-4">
          <span>T(n) = runtime Merge Sort.</span>
          Time complexity of Merge Sort is
          <span className="font-bold">O(n Log n)</span>.
        </p>
      </div>
    </>
  );
};

export default Merge;
