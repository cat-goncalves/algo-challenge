/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/


function fizzBuzz(n) {
  for (let i = 1; i <= n; i++){
      if (i % 15 === 0){
          return "FizzBuzz"
      } else if (i % 3 === 0){
          return "Fizz"
      }else if (i % 5 === 0){
          return "Buzz"
      }else {
          return i
      }
  }
}


module.exports = fizzBuzz