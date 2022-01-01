//  this first problem //

function findFirstUnique(arr) {
  return (
    arr.filter(function (value) {
      return arr.indexOf(value) === arr.lastIndexOf(value);
    })[0] || null
  );
}

var A = [9, 2, 3, 2, 6, 6];
// console.log(A);
alert(findFirstUnique(A));

//   this is second assignment   //

const rotate = (arr, count = 1) => {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
};

const arr = [1, 2, 3, 4, 5, 6];

document.write(rotate(arr, 2));
