// reduce 문법 형식
// reduce((accumulator, currentValue) => {return}, initialValue(초기값))
// accumulator 는 축적된 값. currentValue는 입력값

const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
    console.log({accumulator, current});
    return accumulator + current;
}, 0);

console.log(sum)