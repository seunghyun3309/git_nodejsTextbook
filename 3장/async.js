const fs = require('fs');
// async 비동기 (1-2-3이 random한 순서로 실행)
console.log('시작');
fs.readFile('./readme2.txt', (err,data)=>{
    if(err)
    {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err,data)=>{
    if(err)
    {
        throw err;
    }
    console.log('2번', data.toString());
});

fs.readFile('./readme2.txt', (err,data)=>{
    if(err)
    {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');
