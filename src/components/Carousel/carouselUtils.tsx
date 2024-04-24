function splitArrayIntoChunks<T>(arr: T[], chunkSize: number): T[][] {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const stateDistrubuter = (arr: any[], items: (array: any[]) => void, count: (number: number) => void, arrFunc: (array: any[]) => void): void => {
  items(arr);
  count(arr.length);
  arrFunc([...Array(arr.length).keys(), ...Array(arr.length).keys()]);
};

const chunckStateDistributer = (arr: any[], chunkSize: number, itemsFunc: (array: any[]) => void, countFunc: (number: number) => void, arrFunc: (array: any[]) => void): void => {
  const newArr = splitArrayIntoChunks(arr, chunkSize);
  stateDistrubuter(newArr, itemsFunc, countFunc, arrFunc);
};

export { chunckStateDistributer, splitArrayIntoChunks, stateDistrubuter };
