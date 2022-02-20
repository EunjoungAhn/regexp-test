# 정규 표현식은 크게 다음과 같은 역할을 합니다.

1. 문재 검색(search)
2. 문자 대체(replace)
3. 문자 추출(extract)    

# 정규 표현식 연습 사이트
https://regex101.com/
https://regexr.com/
https://regexper.com/


## 정규 표현식은 다른 언어에서도 쓸 수 있다.    


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

## 예제문자
```js
  const str = `
  010-1234-5678 
  test@test.com
  test quick brown fox test hard Test
  `
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` |  일치하는 문자를 대체