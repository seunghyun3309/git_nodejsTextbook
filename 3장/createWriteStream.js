const fs = require('fs');

const writeStream=fs.createWriteStream('./writeme2.txt');
writeStream.on('finish',()=>{ // final 이벤트 리스너
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다\n'); //메서드로 넣을 데이터 작성
writeStream.write('한 번 더 씁니다.');
writeStream.write('한 번 더 씁니다.');
writeStream.end(); // 메서드 종료