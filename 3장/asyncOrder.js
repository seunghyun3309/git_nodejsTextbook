// 비동기 방식으로 하되 순서를 유지하고 싶다면??
// 시작-끝-1-2-3이 나오게 하려면? 
const fs = require('fs');
console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme2.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme2.txt', (err, data) => {
            if (err) {
                throw err;
            }
            console.log('3번',data.toString());
        });
    });

});


console.log('끝');
