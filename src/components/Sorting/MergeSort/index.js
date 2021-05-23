import React from "react";

const Merge = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Merge Sort</h1>
      <p>
        We call the Merge Sort algorithm by running the mergeSort function and
        passing an array with random integers.
      </p>

      <pre>
        {`
mergeSort(values)
        `}
      </pre>
      <p>
        To avoid having to use multiple arrays for the division (left, right) we
        keep track of the elements to be sorted and merge with a startIndex,
        middleIndex and endIndex.
      </p>
      <p>
        When starting mergeSort for the first time, startIndex and endIndex are
        being initialized with the first and last item of the given array.
      </p>

      <p>
        In the mergeSort function we check if we need to further divide the
        (sub)array. We divide until we have multiple subarrays with a single
        element in it. This process is done recursively by calling mergeSort
        again. When both mergeSort functions resolve, we call the merge
        function.
      </p>
      <pre>
        {`
export const mergeSort = async (
  array,
  startIndex = 0,
  endIndex = array.length - 1
) => {
  if (endIndex - startIndex > 1) {
    let middleIndex = startIndex + ((endIndex - startIndex) >> 1);
    await mergeSort(array, startIndex, middleIndex);
    await mergeSort(array, middleIndex, endIndex);
    await merge(array, startIndex, middleIndex, endIndex);
  }
};
        `}
      </pre>
      <p>
        In the merge section we take in the entire array as well as the indices
        to determine the part we're merging. While merging we compare the values
        added to a temporary array with the values of the elements after the
        middle index. In other words: we're comparing values of 'left' and
        'right' items.
      </p>

      <p>
        If there are still items on the 'left' side and there are no items to
        compare them to, we add them back to the array.
      </p>
      <pre>{`
export const merge = async (array, startIndex, middleIndex, EndIndex) => {
  let tmp = []; // temp array for storing elements
  let length = middleIndex - startIndex;

  // Copy elements from the selection of the main array to temp array
  for (let i = 0; i < length; i++) {
    tmp[i] = array[startIndex + i];
  }

  let j = 0;
  while (j < length && middleIndex < EndIndex) {
    if (tmp[j] <= array[middleIndex]) {
      // Wait one ms for visualization
      await sleep(1);
      array[startIndex++] = tmp[j++];
    } else {
      // Wait one ms for visualization
      await sleep(1);
      array[startIndex++] = array[middleIndex++];
    }
  }

  while (j < length) {
    // Wait one ms for visualizations
    await sleep(1);
    array[startIndex++] = tmp[j++];
  }
};
        `}</pre>
      <div>
        <span className="font-bold">Analysis</span>
        <p>
          Merge sort is a divide and conquer algorithm with the following steps:
        </p>
        <ul>
          <li>
            <p>
              <span className="font-bold">1. </span>
              The divide step calculates the middle of each (sub)array.{" "}
              <span className="underline">This step takes O(1) time.</span>
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">2. </span>
              The conquer step recursively divides both subarrays (left and
              right).{" "}
              <span className="underline">
                This step takes log<sup>2</sup>n time.
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">3. </span>
              The merge step merges elements from both subarrays (left and
              right).{" "}
              <span className="underline">This step takes O(n) time.</span>
            </p>
          </li>
        </ul>
        <p className="font-bold pt-4">Master Theorem</p>

        <div>
          <p className="font-bold">T(n) = 2T(n/2)+ O(n)</p>
          <span>
            O(n<sup>log</sup>
            <sub>
              b<sup>a</sup>
            </sub>
            ) {" = "}
          </span>
          <span>
            O(n<sup>log</sup>
            <sup>
              <sub>2</sub>2
            </sup>
            <sup></sup>)
          </span>
          {" = "} <span> O(n) </span>
          <p>f(n) = 0(n)</p>
          <span>
            T(n) = f(n) * log n (Case: f(n) = O(n
            <sup>
              log<sub>b</sub>a
            </sup>
            ) // Case 2 Master Theorem
          </span>
          <p className="py-4 font-bold">T(n) = O(nlogn)</p>
        </div>
      </div>
    </>
  );
};

export default Merge;
