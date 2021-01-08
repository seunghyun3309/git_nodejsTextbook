// 단방향 암호화 : 비밀번호 암호화

const crypto = require('crypto');

crypto.randomBytes(64,(err,buf)=>{ // random하게64byte 길이의 문자열을 만들어줍니다. 
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000,64,'sha512', (err,key)=>{
        console.log('password:', key.toString('base64'));
    });
});
