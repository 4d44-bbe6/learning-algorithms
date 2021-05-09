import { sleep } from "../../../lib/helpers";

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
