// 단방향 암호화 : 비밀번호 암호화
// hash :  어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식

//createHash(알고리즘) : 사용할 해시 알고리즘을 넣어줍니다.
//update(문자열) : 에 변환된 문자열을 넣어줍니다.
//digest(인코딩) : 인코딩할 문자열을 넣어줍니다.

const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64')); //sha512알고리즘 사용
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex')); 

console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64')); 
