/**
 * 1. if와 문자열 0
 * 아래 코드에서 alert는 실행될까?
 *
 * 실행된다.
 * if 문은 괄호안의 조건을 판별해서 true 면 중괄호안의 코드를 실행하는데,
 * 문자열 "0"은 값이 있는 상태이기 때문에 true 로 판단되어서 코드가 실행된다.
 *
 * 실행되지 않는 경우가 되려면 0 또는 ""(빈문자열) 이 되어야 한다.
 */

if ("0") {
  alert("Hello");
}

/**
 * 2. 자바스크립트의 공식 이름
 * if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"라는 질문을 하는 코드를 작성하기.
 *
 * 사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 아니라면 '모르셨나요? 정답은
 * ECMAScript입니다!'라는 메시지를 보여주기.
 */

// 1. 사용자의 답변을 저장할 변수 선언하기
let answer = prompt("자바스크립트의 공식 이름은 무엇일까요?", "");

// 2. 조건문을 이용해서 코드 작성하기
if (answer === "ECMAScript") {
  alert("정답입니다!");
} else {
  alert("모르셨나요? 정답은 ECMAScript입니다!");
}

/**
 * 3. 입력받은 숫자의 부호 표시하기
 * if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를
 * alert 창에 출력해 보기.
 *
 * 입력받은 숫자가 0보다 큰 경우 1을 출력
 * 입력받은 숫자가 0보다 작은 경우 -1을 출력
 * 입력받은 숫자가 0인 경우 0을 출력
 * (사용자는 항상 숫자를 입력한다고 가정)
 */

// 1. 사용자의 입력을 저장할 수 있는 변수 선언하기
let value = prompt("숫자를 입력해주세요", "");

// 2. 조건문을 이용해서 코드 작성하기
// 비교연산자는 자동형변환이 되기때문에 value를 명시적으로 형변환해주지 않아도 됨
if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}

/**
 * 4. 'if'를 '?'로 교체하기
 * 조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형하기. 동작 결과는 동일해야 함.
 *
 * let result;
 *
 * if (a + b < 4) {
 *   result = '미만';
 * } else {
 *   result = '이상';
 * }
 */
let result = a + b < 4 ? "미만" : "이상";

/**
 * 5. 'if..else'를 '?'로 교체하기
 * 조건부 연산자 '?'를 사용해 if..else문이 사용된 아래 코드를 변형하기. 동작 결과는 동일해야 함.
 *
 * let message;
 * if (login == '직원') {
 *   message = '안녕하세요.';
 * } else if (login == '임원') {
 *   message = '환영합니다.';
 * } else if (login == '') {
 *   message = '로그인이 필요합니다.';
 * } else {
 *   message = '';
 * }
 */
let message = login == "직원" ? "안녕하세요." : login == "임원" ? "환영합니다." : login == "" ? "로그인이 필요합니다." : "";