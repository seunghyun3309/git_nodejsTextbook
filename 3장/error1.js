//일정 간격을 주기로 실행(1000)
setInterval(()=>{
    console.log('시작');
    try{
        throw new Error('서버를 고장내주마!'); // 에러를 강제로 발생
    }catch(err)
    {
        console.log(err);
    }
},1000); //프로세스가 멈추는지 여부