// 클라이언트에서 보내는 요청의 단점 : 누가 보내는지 몰라!!!
// 로그인->쿠키,세션(내부적으로 사용) : 서버에게 여러분이 누구인지를 지속적으로 알려줘
// 브라우저는 쿠키가 있다면 자동으로 동봉하여 보내줌

// **  서버->브라우저로 쿠키를 보낼때 코드 작성**

const http = require('http');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer((req,res)=>{
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200,{'Set-Cookie': 'mycookie=test'});
    res.end('Hello Cookie');
})
.listen(8082, ()=>{
    console.log('8082번 포트에서 서버 대기 중입니다.');
});