//a. forEachArray Function:

function forEachArray(array, callback) {
  for (i = 0; i < array.length; i++) {
    callback(array[i]);
    // callback(array[i], i, array);
  }
}

forEachArray([1, 2, 3, 4], function (arrays) {
  console.log(arrays);
  //   console.log(arrays, j, Array);
});

//b. mapArray Function

function mapArray(array, callback) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  console.log(newArray);
}

mapArray([1, 2, 3, 4], function (arrays) {
  return arrays * 2;
});

// c. filterArray Function

function filterArray(array, callback) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

fruit = ["apple", "banana", "cherry", "date"];
filterArray(fruit, function (arrays) {
  return arrays.length > 2;
});
