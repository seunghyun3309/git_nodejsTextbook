const { get } = require('http');
const {URL} = require('url');

// searchParams : 주소 창의 파라미터를 가져옴
const myURL = new URL('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript'); 
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll()', myURL.searchParams.getAll('category')); //키에 해당하는 모든 값
console.log('searchParams.get()', myURL.searchParams.get('limit')); // get(키) : 키의 첫번째 값
console.log('searchParams.has()', myURL.searchParams.has('page')); // has(키) : 키가 있는지 여부

console.log('searchParams.key()', myURL.searchParams.keys()); // 키를 iterator객체로 가져옵니다.
console.log('searchParams.values()', myURL.searchParams.values()); // value를 iterator객체로 가져옵니다.

myURL.searchParams.append('filter', 'es3'); //키를 추가
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter')); //['es3', 'es5']

myURL.searchParams.set('filter','es6'); //이전 filter의 값을 모두 지우고 새로 추가
console.log(myURL.searchParams.getAll('filter')); //['es6']


myURL.searchParams.delete('filter','es6'); //'es6' 삭제
console.log(myURL.searchParams.getAll('filter')); //[]

console.log('myURL.toString():',myURL.searchParams.toString()); //조작한 객체를 다시 문자열로 만듭니다.
myURL.search=myURL.searchParams.toString();

console.log(myURL.search);