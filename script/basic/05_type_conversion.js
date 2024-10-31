// 숫자형으로 변환
let str = "123";
console.log(Number(str)); // 123

let str2 = "123z";
console.log(Number(str)); // NaN -> 이거 왜 123 나오지?

let str3 = "    1234     ";
console.log(Number(str3)); // 1234

let str4 = undefined;
console.log(Number(str4)); // NaN

let str5 = null;
console.log(Number(str5)); // 0

let str6 = true;
console.log(Number(str6)); // 1

console.log("---------------------------------");

// 불린형으로 변환
let bool = "0";
console.log(Boolean(bool)); // true

let bool2 = 0;
console.log(Boolean(bool2)); // false

let bool3 = undefined;
console.log(Boolean(bool3)); // false

let bool4 = null;
console.log(Boolean(bool4)); // false

let bool5 = "  ";
console.log(Boolean(bool5)); // true
