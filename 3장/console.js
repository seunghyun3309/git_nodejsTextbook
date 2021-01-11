const string ='abc';
const number = 1;
const boolean =true;
const obj ={
    outside:{
        inside:{
            key:'value',
        },
    },
};

console.time('전체 시간'); // time과 timeEnd사이에 걸린 시간 측정
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean); // 여러 내용을 동시에 표현할 수 있음
console.error('에러 메시지는 console.error에 담아주세요'); // 에러 내용 표시

console.dir(obj, {colors: false, depth:2}); // 객체를 콘솔에 표시할 때 사용(객체(obj),옵션) 
console.dir(obj, {colors: true, depth:1}); //colors: true-> 색 추가, depth는 몇 단계까지 보여줄 지

console.time('시간 측정');
for(let i = 0;i<100000;i++)
{
    continue;
}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');
}
function a(){
    b();
}

a();
console.timeEnd('전체 시간');