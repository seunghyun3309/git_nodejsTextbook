process.on(
'uncaughtException', (err)=>{
    console.error('예기치 못한 에러',err); // uncaughtException : 처리하지 못한 에러가 발생할때 실행하고 프로세스가 유지
});

setInterval(()=>{
    throw new Error('서버를 고장내주마!');
},1000);

setTimeout(()=>{
    console.log('실행됩니다.');
},2000);

// 에러 내용을 기록하는 정도로만 사용하고 process.exit()으로 종료하는 것을 추천
// 에러 발생시 철저히 기록하는 습관을 들이고, 주기적으로 로그를 확인