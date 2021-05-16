export const heapSort = async (array) => {
  for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
    heapify(array, array.length, i);
  }

  for (let k = array.length - 1; k >= 0; k--) {
    await sleep(1);
    [array[0], array[k]] = [array[k], array[0]];
    await heapify(array, k, 0);
  }
};

const heapify = async (array, arrayLength, i) => {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (left < arrayLength && array[left] > array[largest]) {
    largest = left;
  }

  if (right < arrayLength && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, arrayLength, largest);
  }
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
