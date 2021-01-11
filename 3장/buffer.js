// 파일을 읽거나 쓰는 방식->버퍼 이용vs 스트림 이용
// 버퍼링 : 영상을 재생할 수 있을 때 까지 데이터를 모으는 동작
// 스트리밍 : 영상 데이터를 조금씩 전송하는 동작

const buffer = Buffer.from('저를 버퍼로 바꿔보세요'); //from(문자열) : 문자열->버퍼
console.log('from():', buffer); 
console.log('length():', buffer.length); 
console.log('toString():', buffer.toString()); //toString() : 버퍼->문자열

const array=  [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array); //배열 안에 든 버퍼를 하나로 합칩니다.
console.log('concat(): ', buffer2.toString());

const buffer3=  Buffer.alloc(5); //alloc(바이트) : 빈 버퍼를 생성
console.log('alloc():', buffer3);

//readFile() 방식의 버퍼-> 여러명이 이용할 때 메모리 문제 발생->createReadStream