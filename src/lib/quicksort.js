export const quickSort = async (arr, startIndex, endIndex) => {
  if (startIndex >= endIndex) {
    return;
  }
  let index = await partition(arr, startIndex, endIndex);

  Promise.all([
    quickSort(arr, startIndex, index - 1),
    quickSort(arr, index + 1, endIndex),
  ]);
};

async function partition(arr, startIndex, endIndex) {
  let pivotValue = arr[endIndex];
  let pivotIndex = startIndex;

  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(arr, pivotIndex, endIndex);
  return pivotIndex;
}

async function swap(arr, a, b) {
  await sleep(1);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
