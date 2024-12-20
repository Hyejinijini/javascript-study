/**
 * 1. "else"는 정말 필요한가요?
 *
 * 아래 함수는 매개변수 age가 18보다 큰 경우 true를 반환한다.
 * 그 이외의 경우는 컨펌 대화상자를 통해 사용자에게 질문한 후, 해당 결과를 반환한다.
 */
// 동일하게 동작함.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

// 위 코드에서 else문을 삭제해도 기존 코드와 동일하게 작동할까요?
// 아니면 뭔가 변화가 있을까요?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("보호자의 동의를 받으셨나요?");
}

/**
 * 2. '?'나 '||'를 사용하여 함수 다시 작성하기
 *
 * 아래 함수는 매개변수 age가 18보다 큰 경우 true를 반환한다.
 * 그 이외의 경우는 컨펌 대화상자를 통해 사용자에게 질문한 후, 해당 결과를 반환한다.
 *
 * if문을 사용하지 않고 동일한 동작을 하는 함수를 한 줄에 작성해보자.
 *
 * 아래 조건을 충족하는 해답 2개를 작성
 *
 * 물음표 연산자 ?를 사용하여 본문을 작성
 * OR 연산자 ||를 사용하여 본문을 작성
 */
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

function checkAge2(age) {
  return age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
}

function checkAge3(age) {
  return age > 18 || confirm("보호자의 동의를 받으셨나요?");
}

/**
 * 3. min(a, b) 함수 만들기
 *
 * a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들어보자.
 *
 * 만든 함수는 아래와 같이 동작해야 한다.
 *
 * min(2, 5) == 2
 * min(3, -1) == -1
 * min(1, 1) == 1
 */
function min(a, b) {
  return a > b ? b : a;
}

/**
 * 4. pow(x,n) 함수 만들기
 *
 * x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보자.
 * x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.
 *
 * pow(3, 2) = 3 * 3 = 9
 * pow(3, 3) = 3 * 3 * 3 = 27
 * pow(1, 100) = 1 * 1 * ...* 1 = 1
 *
 * 프롬프트 대화상자를 띄워 사용자로부터 x와 n을 입력받고 pow(x,n)의 반환 값을 보여주는 코드를 작성해 보자.
 *
 * 주의사항: n은 1 이상의 자연수이어야 한다.
 * 이외의 경우엔 자연수를 입력하라는 얼럿 창을 띄워주어야 한다.
 */
function pow(x, n) {
  return Math.pow(x, n);
}

let x = prompt("x값을 입력해주세요.", 0);
let n = prompt("n값을 입력해주세요.", 0);

n > 1 ? alert(pow(x, n)) : alert("1 이상의 자연수를 입력해주세요.");
