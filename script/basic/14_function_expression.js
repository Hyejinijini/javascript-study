/**
 * 함수 표현식
 */
let sayHi = function () {
  alert("Hello");
};

/**
 * 익명 함수
 */
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "동의하십니까?",
  function () {
    alert("동의하셨습니다.");
  },
  function () {
    alert("취소 버튼을 누르셨습니다.");
  }
);
