import { sleep } from "./helpers";

export const quickSort = async (arr, startIndex, endIndex, states) => {
  if (startIndex >= endIndex) {
    return;
  }
  let index = await partition(arr, startIndex, endIndex, states);
  states[index] = -1;

  Promise.all([
    quickSort(arr, startIndex, index - 1, states),
    quickSort(arr, index + 1, endIndex, states),
  ]);
};

async function partition(arr, startIndex, endIndex, states) {
  for (let i = startIndex; i < endIndex; i++) {
    states[i] = 1;
  }

  let pivotValue = arr[endIndex];
  let pivotIndex = startIndex;
  states[pivotIndex] = 0;
  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex++] = -1;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, endIndex);

  for (let i = startIndex; i < endIndex; i++) {
    if (i !== pivotIndex) {
      states[i] = -1;
    }
  }
  return pivotIndex;
}

async function swap(arr, a, b) {
  await sleep(1);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
