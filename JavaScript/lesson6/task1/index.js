const array = [7, 8, 9, 4];
function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}
const arrBound = getArrayBounds(array);
console.log(arrBound);