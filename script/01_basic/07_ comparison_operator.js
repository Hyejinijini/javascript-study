// 비교
// 아래 표현식들의 결과를 예측하기.

5 > 4; // true
"apple" > "pineapple"; // false -> 문자열은 사전순으로 비교하기 때문에(뒤로 갈수록 크다고 판단)
"2" > "12"; // false -> true (틀림) -> 2가 더 뒤에 있으니까 true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false -> 동등 연산자는 null과 undefined는 자동으로 형변환을 하지 않는다.
null === +"\n0\n"; // false
