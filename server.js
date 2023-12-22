const items = [...Array(9).keys()];

function splitArrayIntoChunks(arr, chunkSize) {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const chunkedArray = splitArrayIntoChunks(items, 1);
// console.log(chunkedArray);