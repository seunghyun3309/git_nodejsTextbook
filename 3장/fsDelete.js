const fs = require('fs');
fs.readdir('./folder', (err, dir) => { // 폴더 안에 내용을 확인
    if (err) {
        throw err;
    }
    console.log('폴더 내용 확인', dir);
    fs.unlink('./folder/newFile.js', (err) => { // 파일을 지우기
        if (err) {
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./folder',(err)=>{ //폴더를 지우기
            if(err)
            {
                throw err;
            }
            console.log('폴더 삭제 성공');
        })
    });
});