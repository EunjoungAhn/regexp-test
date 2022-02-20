//` 백틱 기호를 사용하면 줄바꿈 처리를 할 수 있는 문자를 칠 수 있다.
let str = `
010-1234-5678 
test@test.com
test quick brown fox test hard Test
`

//생성자 방식
const regexp = new RegExp('test','')
const regexp2 = new RegExp('test','g') //g 플래그를 적으면
//test 라는 문자가 몇개 있는지 배열로 보여준다.
console.log(str.match(regexp))

//test 와 동일한 첫번째 test를 찾는다.
console.log(str.match(regexp2))

//대문자 소문자 구분하지 않겠다.
const regexp3 = new RegExp('test','gi')
console.log(str.match(regexp3))

console.log("----------------")

//리터널 방식
const regexpL = /test/gi
console.log(str.match(regexpL))


console.log("----------------")
//메서드 사용하기
const regexpL2 = /quick/gi
console.log(regexpL2.test(str))


const regexpL3 = /quick/gi
console.log(str.replace(regexpL3, 'fast'))
console.log(str)
//이 상태로는 원본을 유지하고 있어서 원본을 바꾸고 싶다면
str = str.replace(regexpL3, 'fast') 
//재할당을 해서 값을 넣으면 원본을 바꿀 수 있다.
console.log(str)

console.log("----------------")
//플래그 사용

// .은 명령어이다. 
// . 조차 검색하고 싶으면 앞에 \ 백슬래시를 붙이면 된다.
console.log(str.match(/\.$/gim))
//여러줄의 끝에 (\.$의 의미는 마침표로 끝나는 줄을 찾는다.)
//라는 의미이며, 정규식 gi 다음 m 을 붙이면 전체의 값의
//마지막을 찾는 것이 아닌, 모든 줄바꿈이 있는 줄의 마지막
//. 마침표를 찾을 것이다. 