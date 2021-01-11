import {odd, even} from './var'; // 불러올 모듈의 경로(변수)

function checkOddOrEven(num)
{
    if(num%2)
    {
        return odd;
    }
    return even;
}

export default checkOddOrEven;

// 실행 시 : node --experimental-modules[파일명]