
// 1. 리터럴 literal
console.log('hello');
console.log("hello");
console.log("hello") // ;를 붙이지 않아도 출력된다.

console.log("2022-12-03") // 문자
console.log(2022-12-03)   // 숫자, 빼기로 인식

// 2. 변수
// 변수 종류 : var, let, const

var num = 123;
var greeting = "hi";

console.log(num);
console.log(greeting);

var x = 2;
var y = "2";

console.log(x+x);
console.log(y+y);

// 3. javascript 이스케이프 시퀀스 ( \ 역슬레시를 활용한 특수문자표현)

console.log('it\'s a book');
console.log("it's a book");
console.log("New York is called \"The Big Apple\".");
console.log('hello\nworld');

// 4. 변수 3가지 종류 비교 (var, let const)
// Block Scope 지역범위{ } VS Global Scope 전역범위

// 4-1. var
// var : 과거에 사용, 현재는 let, const 권장
// var hoisting (move declaration from bottom to top)

 {age = 10
  var age} // var는 정의와 선언의 순서가 바뀌어도 작동한다.
  console.log(age)

// 4-2. let
let globalName = 'global' 
// let을 {} 밖에서 변수선언을 할 경우 {} 안과 밖 모두에서 출력 가능
{
    console.log(globalName);

    // Block Scope 지역범위{ }
    let name = 'ana'; // 변수 선언과 동시에 데이터를 할당=정의 함
    console.log(name);

    // let name = 'lisa'; 오류
    // let을 붙이면 새로운 변수를 생성하는 것이다, let은 변수명 중복을 허용하지 않는다.

      name = 'lisa';
      console.log(name);

      name = 'nick';
      console.log(name);

}

console.log(globalName);
// console.log(name); 출력 안되는 현상 발생
// let은 {} 안에 변수선언{ex let name}을 하면 -> { } 범위 안에서만 출력이 가능하다.
// 즉, {} 밖에서 출력시 오류 발생

// 4-3. const 상수 (constants)

const dayInWeek = 7;
console.log("일주일은 몇일인가? 답 : " + dayInWeek + "일")
console.log(`일주일은 몇일인가? 답 : ${daysInWeek}일`) // 주의 : $를 사용할 때는 역따옴표(tab 키 위에 있음) 사용

const price = 6000;
   // price = 7000; // 콘솔창 확인시 오류
   // console.log(price);  // 오류 이유 : const name = 6000으로 정의를 이미 했고, const 성격상 재정의불가(let과의 차이점)
   // 변경할 필요가 없거나 변경을 함부로 못하게 하려면 const를 사용