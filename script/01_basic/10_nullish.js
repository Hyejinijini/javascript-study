/**
 * 문제
 * 아래 변수들이 주어졌다고 가정하고, 각 변수에 대한 결과값을 ?? 연산자를 사용해 구해보자.
 *
 * 나이 (age): age가 없으면 나이 미상으로 설정.
 * 닉네임 (nickname): nickname이 없으면 닉네임 없음으로 설정.
 * 점수 (score): score가 없으면 기본 점수 100으로 설정.
 * 유저네임 (username): username이 없으면 유저 미상으로 설정.
 */
let age;
let nickname = null;
let score = 0;
let username = "홍길동";

age = age ?? "나이미상"; // 나이 미상 -> undefined 이기 때문에
nickname = nickname ?? "닉네임 없음"; // 닉네임  없음 -> null 이기 때문에
score = score ?? 100; // 0 -> 0이라는 값이 할당되어있기 때문에
username = username ?? "유저 미상"; // 홍길동 -> 홍길동이라는 값이 할당되어있기 때문에
