# 정규 표현식은 크게 다음과 같은 역할을 합니다.

1. 문재 검색(search)
2. 문자 대체(replace)
3. 문자 추출(extract)    

<br/>

# 정규 표현식 연습 사이트
https://regex101.com/
https://regexr.com/
https://regexper.com/

<br/>

## 정규 표현식은 다른 언어에서도 쓸 수 있다.    

<br/>

# 자바스크립트에서 정규식 생성 방법은 2가지가 있다.
1. RegExp 생성자 함수
2. 리터럴(Literal) 방식

```js
//RegExp 생성자 함수를 호출하여 사용할 수 있습니다.

const regexp1 = new RegExp("^abc");
// new RegExg(표현식)

const regexp2 = new RegExp("^abc", "gi");
// new RegExg(표현식(패턴), 플래그)

//리터럴(Literal, 문자 그대로의) 방식
//정규표현식은 /로 감싸진 패턴을 리터럴로 사용합니다.

const regexp1 = /^abc/;
// /표현식/

const regexp2 = /^abc/gi;
// /표현식/플래그
```

<br/>

## 예제문자
```js
  const str = `
  010-1234-5678 
  test@test.com
  test quick brown fox test hard Test
  `
```

<br/>

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` |  일치하는 문자를 대체      

<br/>

## 플래스(옵션)     


플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore caes)
m | 여러 줄 일치(multi line)

<br/>

## 패턴(표현)
패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5새 이하(3~5개) 연속 일치
\b | 경계를 만들어 준다. ex) /www. 경계에 감싸져 있는 단어 들 검색
[abc] | a 또는 b 또는 c
[a-z] | a 부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A 부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0 부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)
