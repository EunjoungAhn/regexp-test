//` 백틱 기호를 사용하면 줄바꿈 처리를 할 수 있는 문자를 칠 수 있다.
const str = `
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