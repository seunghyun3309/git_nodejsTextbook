const fs= require('fs');

// 파일이 잘 만들어졌고, 동시에 파일 읽기도 성공!!
fs.writeFile('./writeme.txt', '글이 입력됩니다',(err)=>{
    if(err)
    {
        throw err;
    }
    fs.readFile('./writeme.txt',(err,data)=>{
        if(err)
        {
            throw err;
        }
        console.log(data.toString());
    });
});