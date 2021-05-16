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

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
