function reverseString(str) {
  let stringArr = str.split("")
  let length = stringArr.length
  let newArr = []
  // console.log(stringArr)

  for (let i = length - 1; i >= 0; i --){
    newArr.push(stringArr[i])    
  }
  return newArr.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
