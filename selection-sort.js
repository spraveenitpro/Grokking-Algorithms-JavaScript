let myList = [45,23,24, 45,67,1,22,58,90,103,34,29,19,8];

function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }

  }
  return smallest_index;
}

function selectionSort(arr) {
  let newArr = [];
  let lengthOfArr = arr.length;
  for (let i = 0; i < lengthOfArr; i++) {
    let smallest = findSmallest(arr)
    newArr.push(arr[smallest])
    arr.splice(smallest, 1)
  }
  return newArr;
}


//console.log(findSmallest(myList));
console.log(selectionSort(myList));
