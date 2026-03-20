/**
 * 2단 ~ 9단 출력
 */

// 내 코드
for (let i = 1; i < 10; i++) {
  let output = "";
  for (let j = 2; j < 10; j++) {
    output = `${j} * ${i} = ${j * i}\t`;
  }
  console.log(output);
}

// 강사님 코드 2~9단
for (let i = 1; i < 10; i++) {
  let output = "";
  for (let j = 2; j < 10; j++) {
    output += `${j} * ${i} = ${i * j}\t`;
  }
  console.log(output);
}
// 강사님 코드 n~n단
let start = 2;
let end = 10;
for (let i = 1; i < 10; i++) {
  let output = "";
  for (let j = start; j <= end; j++) {
    output += `${j} * ${i} = ${i * j}\t`;
  }
  console.log(output);
}

/**
 * 삼각형 별찍기
 */

/**
 
 * 
 **
 ***
 ****
 *****

 */

for (let i = 1; i <= 5; i++) {
  let output = "";
  //   for (let j = 1; j <= i; j++) {
  //     output += "*";
  //   }
  output += "⭕".repeat(i);
  console.log(output);
}

/**
 * 삼각형으로 초록색 사과 출력
 * - 세번째줄만 빨간색 사과로 출력
 */

for (let i = 1; i <= 5; i++) {
  let output = "";
  for (let j = 1; j <= i; j++) {
    if (i === 3) {
      output += "🍎";
    } else {
      output += "🍏";
    }
  }
  console.log(output);
}

/**
 * 정삼각형 별찍기 - repeat(반복횟수) 함수 사용
 */

for (let i = 1; i <= 5; i++) {
  let output = "";
  let space = "";
  space += " ".repeat(5 - i);
  output += "🍊".repeat(i);
  console.log(space, output);
}

/**
 * 마름모꼴 별찍기 - 정삼각형 별찍기 응용
 */

console.clear();
let size = 10;
for (let i = 1; i <= size; i++) {
  let output = "";
  let space = "";
  space += " ".repeat(size - i);
  output += "🍊".repeat(i);
  console.log(space, output);
}
for (let i = size - 1; i >= 1; i--) {
  let output = "";
  let space = "";
  space += " ".repeat(size - i);
  output += "🍎".repeat(i);
  console.log(space, output);
}
