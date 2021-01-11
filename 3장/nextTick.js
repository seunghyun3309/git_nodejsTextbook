setImmediate(()=>{
    console.log('immediate');
});

process.nextTick(()=> 
{
    console.log('nextTick');
}); //Immediate 보다 먼저 실행

setTimeout(()=>{
    console.log('timeout');
},0);
Promise.resolve().then(()=>console.log('promise')); // 다른 콜백 보다 우선시!(마이크로테스크)