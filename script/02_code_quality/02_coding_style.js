/**
 * 좋지 않은 코드 스타일
 *
 * 아래 코드가 어떤 점에서 좋지 않은지 생각해보고, 더 나은 코드로 고쳐보자.
 */
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", ""),
  n = prompt("n?", "");
if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  alert(pow(x, n));
}

// ------------------------------------------------

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    return result;
  }

  let x = prompt("x", "");
  let n = prompt("n", "");

  if (n <= 0) {
    alert(`Power ${n} is not supported,
      please enter an integer number greater than zero`);
  } else {
    alert(pow(x, n));
  }
}
