const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠'); // 암호화 알고리즘+키
let result=cipher.update('암호화할 문장', 'utf8', 'base64'); // 암호화할 대상, 인코딩, 출력 인코딩
result+=cipher.final('base64'); //출력 결과물->암호화
console.log('암호화:', result);

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2= decipher.update(result, 'base64', 'utf8'); // 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩
result2 += decipher.final('utf8'); //출력 인코딩
console.log('복호화:', result2);