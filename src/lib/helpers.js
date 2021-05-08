export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
