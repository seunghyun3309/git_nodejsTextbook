let i=1;
setInterval(()=>{
    if(i===5)
    {
        console.log('종료!');
        process.exit(); //exit(1)은 비정상 종료
    }
    console.log(i);
    i+=1;
},1000);