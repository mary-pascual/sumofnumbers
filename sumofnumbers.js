/**
 * Solving E26
 * Created by Mary on 2/4/2017.
 */

const listOfNumbers = [2, 4, 6, 8, 10];

function sumFor(numbers){
  let sum = 0;
  for(const number of numbers){
    sum += number;
  }
  return sum;
}

console.log(sumFor(listOfNumbers));

function sumWhile(numbers){
  let sum = 0;
  let i = 0;
  while(i < numbers.length){
    sum += numbers[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(listOfNumbers));

function sumRecursion(numbers){
  if(numbers.length === 0){
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

console.log(sumRecursion(listOfNumbers));

function sumTheSimpleWay(numbers){
 return _.reduce(numbers, function memoizer(memo, num){ return memo + num }, 0);
}

console.log(sumTheSimpleWay(listOfNumbers));