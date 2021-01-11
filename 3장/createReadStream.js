const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

// 이벤트 리스너를 붙여서 사용
readStream.on('data', (chunk=>{
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
}));

// 미리 data배열을 만들어 놓고 들어오는 chunk들을 하나씩 push->concat
readStream.on('end', ()=>{
    console.log('end: ', Buffer.concat(data).toString());
});

readStream.on('error', (err)=>{
    console.log('error:', err);
});