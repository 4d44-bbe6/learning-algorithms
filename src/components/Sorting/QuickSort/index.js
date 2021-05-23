import React from "react";

const Quick = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Quick Sort</h1>
      <p>
        We call the Quick Sort algorithm by running the quickSort function and
        passing an array with random integers.
      </p>

      <pre>
        {`
quickSort(values)
        `}
      </pre>
      <p>
        When starting quickSort for the first time, startIndex and endIndex are
        being initialized with the first and last item of the given array.
      </p>
      <p></p>
      <p>
        This division will recursively continue until the input array is no
        longer divisible.
      </p>
      <pre>
        {`
export const quickSort = async (
  array,
  startIndex = 0,
  endIndex = array.length
) => {
  if (startIndex >= endIndex) {
    return;
  }
  let index = await partition(array, startIndex, endIndex);
  Promise.all([
    quickSort(array, startIndex, index - 1),
    quickSort(array, index + 1, endIndex),
  ]);
};
        `}
      </pre>
      <pre>
        {`
async function partition(array, startIndex, endIndex) {
  let pivotValue = array[endIndex];
  let pivotIndex = startIndex;

  for (let i = startIndex; i < endIndex; i++) {
    if (array[i] < pivotValue) {
      await sleep(1);
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex++;
    }
  }
  await sleep(1);
  [array[pivotIndex], array[endIndex]] = [array[endIndex], array[pivotIndex]];
  return pivotIndex;
}
      `}
      </pre>
    </>
  );
};

export default Quick;
