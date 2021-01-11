const fs = require('fs');
fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => { //폴더나 파일에 접근할 수 있는지 확인
    if (err) {
        if (err.code == 'ENOENT') {
            console.log('폴더 없음');
            fs.mkdir('./folder', (err) => { //폴더를 만드는 메서드
                if (err) {
                    throw err;
                }
                console.log('폴더 만들기 성공');
                fs.open('./folder/file.js', 'w', (err, fd) => {
                    if (err) {
                        throw err;
                    }
                    console.log('빈 파일 만들기 성공', fd);
                    fs.rename('./folder/file.js', './folder/newfile.js', (err) => { //파일의 이름을 바꾸는 메서드
                        if (err) {
                            throw err;
                        }
                        console.log('이름 바꾸기 성공!');
                    });
                });
            });
        }
        else {
            throw err;
        }
    }
    else {
        console.log('이미 폴더 있음');
    }

});