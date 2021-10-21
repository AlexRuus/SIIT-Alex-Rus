// var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]

// 1. Display in the console the numbers from 1 to 20

for(var i = 1; i <= 20; i++){
    console.log(i);
}


// 2. Display in the console the odd numbers from 1 to 20

for(var i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// 3. Compute the sum of the elements of an array and display it in the console

var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];

var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}


console.log(sum);


// 4.Compute the maximum of the elements of an array and display it in the console

var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];

var max = array[0];

for(var i = 0; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
}
console.log(max);


// 5.Compute how many times a certain element appears in an array.



var count = [1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1].reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
  
    return acc;
  }, {});

  console.log(count);


  // 6. Using nested control structures (doua for + if) for generate the following pattern 
  
    // 0 1 0 1

    // 1 0 1 0

    // 0 1 0 1

    // 1 0 1 0

  for(var i = 0; i < 4; i++){
    var pattern = '';
    for(var y = 0; y < 4; y++){
       pattern += (((i % 2) + y) % 2) + ' ';
    }
    console.log(pattern);
}