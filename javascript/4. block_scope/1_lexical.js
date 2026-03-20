//스코프에 해당되는 lexical 환경을 만듬
// 메모리에서 없어진다?

let a = 10; // 전역변수
console.log(a);
{
  let a = 20; // 지역변수
  console.log(a);
  {
    let a = 30; // 지역변수
    console.log(a);
  }
}

for (let i = 1; i < 6; i++) {
  console.log(i);

  for (let j = 1; j < 6; j++) {
    console.log(j);
  }
}

/**
 * block 단위로 실행되는 lexical environment
 */
console.clear();

{
  let a = 10; //전역 변수
  console.log(a);
  {
    let b = 20; //지역 변수
    console.log(a, b);
    {
      let c = 30; //지역 변수
      console.log(a, b, c);
    } // 지역 스코프 : Local block scope
  } // 지역 스코프 : Local block scope
} // 전역 스코프 : Global block scope
