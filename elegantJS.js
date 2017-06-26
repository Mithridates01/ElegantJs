function isEvenRecurs(number) {
  if (number === 1) {
    return false;

  }else if (number === 0) {
    return true;

  } else {
    
    if (number > 0) {
      return isEvenRecurs(number - 2);
    } else if (number < 0) {
      return isEvenRecurs(number + 2)
    }

  }
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEvenRecurs(50));
console.log(isEvenRecurs(25));
console.log(isEvenRecurs(1));
console.log(isEvenRecurs(0));
console.log("------------")
console.log(isEvenRecurs(-50));
console.log(isEvenRecurs(-25));
console.log(isEvenRecurs(-1));

console.log("\n Non recursive \n");

console.log(isEven(50));
console.log(isEven(25));
console.log(isEven(1));
console.log(isEven(0));
console.log("------------")
console.log(isEven(-50));
console.log(isEven(-25));
console.log(isEven(-1));