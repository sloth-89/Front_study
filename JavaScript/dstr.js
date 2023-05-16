// 비구조화 할당 01 - 배열

let apple, banana, rest01;

[apple, banana] = ['사과', '바나나'];
console.log(apple);
console.log(banana);


[apple, banana, ...rest01] = ['사과2', '바나나2', '수박', '포도'];
console.log(apple);
console.log(banana);
console.log(rest01);


// 비구조화 할당 02 - 객체

let a, b, rest02;

({a, b} = {a:1000, b:2000});
console.log(a);
console.log(b);


let sayKorean = {x: '엑스', y: '와이'};
let {x, y} = sayKorean;
console.log(x);
console.log(y);


// 비구조화 할당 03 - 객체 + 함수

const obj = {param1: 'p1', param2: 'p2'};
function print({param1, param2}){ // 키 값은 중괄호가 필요하다
    console.log(param1);
    console.log(param2);
}
// print 함수 자체는 준비만 해둔 상태고, 실행은 함수인 print(데이터) 호출해야 콘솔 출력 실행이됨.
print(obj);