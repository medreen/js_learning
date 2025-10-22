const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return "No match found";
};

console.log(twoSum([2, 3, 5, 7], 10));

//Test 2
let isPalindrome = function (x) {
  x = x.toString();
  x_reverse = x.split("").reverse().join("");
  if (x_reverse === x) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));

//test3

let romanToInt = function(s) {
 s = s.lowerCase;
 let int = 0;
  for (let i = 0; i < s.length; i++){
    if (s[i] === "i") {
      int += 1;
    } else if (s[i] === "v") {
      int += 5;
    } else if (s[i] === "x") {
      int += 10;
  }
  }
  return int;
};

console.log(romanToInt("iii"))
