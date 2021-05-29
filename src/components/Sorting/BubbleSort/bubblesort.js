export const bubbleSort = async (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        await sleep();
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
};

const sleep = (ms = 5) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
