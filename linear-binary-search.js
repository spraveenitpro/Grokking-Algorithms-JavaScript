const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function linear_search(list, item) {
  for (let i = 0; i < list.length; i++) {
    console.log(i);
    if (item == list[i]) {
      return list[i];
    }
  }
  return -1;
}

function binary_search(list, val) {
  let lower = 0;
  let higher = list.length - 1;


  while (lower <= higher) {
    console.log("try");
    let middle = Math.floor((lower + higher) / 2);
    if (val == list[middle]) {
      return list[middle];
    }
    if (val < list[middle]) {
      higher = middle - 1;
    }
    else {
      lower = middle + 1;
    }
  }
  return -1;
}

 


console.log(binary_search(list, 10));
