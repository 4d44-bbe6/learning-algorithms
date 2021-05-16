export const mergeSort = async (
  array,
  startIndex = 0,
  endIndex = array.length
) => {
  if (endIndex - startIndex > 1) {
    let middleIndex = startIndex + ((endIndex - startIndex) >> 1);
    await mergeSort(array, startIndex, middleIndex);
    await mergeSort(array, middleIndex, endIndex);
    await merge(array, startIndex, middleIndex, endIndex);
  }
};

export const merge = async (
  array,
  startIndex = 0,
  middleIndex = array.length / 2,
  EndIndex = array.length
) => {
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

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
