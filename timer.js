const timeout= setTimeout(()=>{
    console.log('1.5초 후 실행');
},1500); //4

const interval = setInterval(()=>{
    console.log('1초 마다 실행');
},1000); //3

const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.');
},3000); //5

setTimeout(()=>{
    clearTimeout(timeout2); //Timeout을 취소
    clearInterval(interval); //Inverval을 취소
},2500); // cf. 항상 Interval이 빠른것은 아님, setTimeout사용하지 않는걸 권장

const immediate=setImmediate(()=>{
console.log('즉시 실행');
});  //1

const immediate2=setImmediate(()=>{
    console.log('실행되지 않습니다.');
});  //2

clearImmediate(immediate2); //Immediate를 취소