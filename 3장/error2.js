const fs = require('fs');

//일정 간격을 주기로 실행(1000)
setInterval (()=>{ 
fs.unlink('./abcdefg.js', (err)=>{
console.error(err); //throw한 경우 try-catch문으로 throw한 error를 잡아주어야 함
});
},1000) ;