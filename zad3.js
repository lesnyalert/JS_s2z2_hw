const array = [1,2,3,4,5,6];

let numberOfRotations = function(arr,num) {
  let counter = 1;

  (function rotateNumbers () {
    arr.unshift(arr.pop())

      if (counter < num) {
          counter++;
          setTimeout(rotateNumbers, 400);
      }
      console.log(arr);
  })();
};

numberOfRotations(array, 2);