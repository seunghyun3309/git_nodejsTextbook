const {odd, even} = require('./var2'); // 불러올 모듈의 경로(변수)

function checkOddOrEven(num)
{
    if(num%2)
    {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;