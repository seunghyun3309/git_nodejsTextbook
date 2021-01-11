const { fstat } = require('fs');
const http = require('http'); //http 모듈 사용
const fs = require('fs');

http.createServer((req, res) => { //req : 객체의 요청에 관한 정보 res : 객체의 응답에 관한 정보
    fs.readFile('./server2.html', (err,data)=>{
        if(err)
        {
            throw err;
        }
        res.end(data);
    });
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기중입니다.')// listen에 의해 8080번 포트에서 요청이 오기를 대기
});