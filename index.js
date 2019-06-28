function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach(item => {
    if(Array.isArray(item)){
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
  return sum;
}

module.exports = sumItems;

// function sumItems(array) {
//   // Sum all the numbers in the array
//   if(array.length === 0){
//     return 0;
//   }

//   if(array.length === 1){
//     if(Array.isArray(array[0])){
//       return sumItems(array[0]);
//     } else {
//       return array[0];
//     }
//   }

//   if(Array.isArray(array[0])){
//     return sumItems(array[0]) + sumItems(array.splice(1));
//   }

//   let element = array[0];
//   array.shift();
//   return element + sumItems(array);
// }