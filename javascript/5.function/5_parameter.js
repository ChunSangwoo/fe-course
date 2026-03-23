/**
 * 함수호출 --> 파라미터(인자, 입력되는 값) ---> 함수의 변수(지역)에 자동 매핑
 * 래스트 파라미터(Rest parameter): '...'의 기호를 파라미터에 입력
 * - 래스트 파라미터로 입력되는 인자는 배열에 저장하여 매핑
 */

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));

function add(n1, n2) {
  // 매개변수, 지역변수
  return n1 + n2;
}

function add(n1, n2, n3) {
  return n1 + n2 + n3;
}

function add(n1, n2, n3, n4) {
  return n1 + n2 + n3 + n4;
}

function add(...args) {
  //매개변수, 지역변수
  // args 배열의 합을 구하여 반환
  let sum = 0;
  for (i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(add2("홍길동", 20, 1, 2, 3, 4, 5));
// let obj = add2('홍길동', 20, 1, 2, 3, 4, 5)
// console.log(obj.name)

function add2(name, age, ...args) {
  let sum = 0;
  for (i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return {
    name: name,
    age: age,
    score: sum,
  };
}
