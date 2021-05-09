import React from "react";

const Merge = () => {
  return (
    <>
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
        (sub)array. When we do we find a new middleIndex and recursively call
        mergeSort again for both divisions. When this resolves, we call the
        merge function.
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
const merge = async (array, startIndex, middleIndex, EndIndex) => {
  let tmp = []; // temp array for storing elements
  let length = middleIndex - startIndex;

  // Copy elements from the selection of the main array to temp array
  for (let i = 0; i < length; i++) {
    tmp[i] = array[startIndex + i];
  }

  let j = 0;
  while (j < length && middleIndex < EndIndex) {
    if (tmp[j] <= array[middleIndex]) {
      await sleep(1);
      array[startIndex++] = tmp[j++];
    } else {
      await sleep(1);
      array[startIndex++] = array[middleIndex++];
    }
  }

  while (j < length) {
    await sleep(1);
    array[startIndex++] = tmp[j++];
  }
};
        `}</pre>
    </>
  );
};

export default Merge;
