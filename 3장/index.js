const {odd, even} = require('./var2') // 불러올 모듈의 경로(변수)
const checkNumber = require('./func') //checkOddorEven 함수 실행
function checkStringOddOrEven(str)
{
    if(str.length%2)
    {
        return odd;
    }
    else
    {
        return even;
    }
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));