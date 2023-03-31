
const color = ['red', 'orange', 'yellow']
const nextColor = [...color,'green', 'blue']

console.log(nextColor)

const animals = ['개', '고양이', '참새']
const anotherAnimals = [...animals, '비둘기']

console.log(animals);
console.log(anotherAnimals);

// spread 연산자(...)의 경우 - react의 reducer에서 주로 사용되는데 react의 경우 객체 수정이 바로 되지 않기 때문에 
// 스프래드로 복제를 한 후에 업데이트 코드를 작성해줘야 화면 구현이 잘 된다.
// 예를 들어

const obj = {
    a: 1,
    b: 2
};

obj.b = 3;

console.log(obj.b)

// 자바스크립트의 경우 이런 식으로 해도 변경이 되지만

const nextObj = {
    ...obj,
    b: 3
};

// 리액트의 경우 스프래드 연산자로 한번 복사를 한 후 업데이트를 해줘야 화면 구현이 잘 된다.