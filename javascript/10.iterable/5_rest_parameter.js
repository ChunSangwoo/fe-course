/**
 * Rest Parameter : 파라미터 인자를 배열로 저장함
 * - 함수의 매개변수에 정의함
 * - function 함수명 (...Rest Parameter) {}
 * - const 함수명 = (...Rest Parameter) => {}
 *
 */

function add(a, b, ...numbers) {
  //   let sum = numbers.reduce((acc, cur) => acc + cur);
  return a + b + numbers.reduce((acc, cur) => acc + cur);
}

let result1 = add(1, 2, 3, 4, 5);
console.log(result1);

const fadd = (f1, ...fruits) => {
  //...fruits: rest 파라미터
  console.log(f1, fruits);
  //   return { f1, ...fruits };
  return [f1, ...fruits];
};

let fruits = ["🍎", "🍏", "🍓"];
let fobj = fadd("🍋", ...fruits); //...fruits : spread 연산자 (전개 구문)
//fadd ('🍋','🍎','🍏','🍓')
console.log("fobj = ", fobj);
