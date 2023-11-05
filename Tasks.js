// 1.a) Print odd numbers in an array (Anonymous)

const printOdd = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
};

printOdd([1, 2, 3, 4, 5, 6, 7, 8]);

// IIFE

(function (arr) {
  for (let i in arr) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8]);

// 1.b)Convert all the strings to title caps in a string array (Anonymous)

function titleCase() {
  let str=("hello world".toLowerCase().split(" "));

for (let i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
}
console.log(str.join(" "));
}
titleCase()

// IIFE

(function(){
  let str=("hello world".toLowerCase().split(" "));

for (let i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
}
console.log(str.join(" "));
})();