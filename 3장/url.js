const url = require('url');

const URL = url.URL;
const myURL = new URL('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('new URL():', myURL);
console.log('url.format():', myURL);
console.log('url.format():', url.format(myURL));
console.log('--------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate=001001000#anchor');
console.log('url.parse():', parsedUrl); // 주소를 분해합니다. username 대신 auth속성이 있고, searchParams 대신 query가 있다.
console.log('url.format():', url.format(parsedUrl));// 분해한 url을 다시 원래 상태로 조립

