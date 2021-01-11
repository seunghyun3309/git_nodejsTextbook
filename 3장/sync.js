const fs = require('fs');
// sync 동기 -> 백그라운드 작업이 끝나야 다음 작업 실행(블로킹)
console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');
// 단점 : 요청이 수백개 이상 들어왔을 때 성능 문제 발생
// 비동기 메서드가 훨씬 효율적
// 동기 메서드들은 Sync가 붙어 있어 구분 가능
