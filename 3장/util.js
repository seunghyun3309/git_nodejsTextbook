const util = require('util');
const crypto = require('crypto');
const dontUseMe = util.deprecate((x,y)=>{
    console.log(x+y);
}, 'dontUseMe 함수는 deprecated 되었으니 더이상 사용하지 마세요!'); //deprecated : 중요도가 떨어져 더이상 사용되지 않고 앞으로 사라질 예정
dontUseMe(1,2);

const randomBytesPromise= util.promisify(crypto.randomBytes); //콜벡 패턴을 프로미스 패턴으로 바꿔줌
randomBytesPromise(64).then((buf)=>{
    console.log(buf.toString('base64'));
})
.catch((error)=>{
    console.error(error);
});