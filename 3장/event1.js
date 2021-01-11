// 스트림을 배울 때 on('data', 콜백) 또는 on('end', 콜백)을 사용
// data,end 이벤트가 발생할 때->호출하는 이벤트 등록
// 직접 이벤트를 만드는 방법
const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => { //addListener : on 과 기능이 같음
    console.log('이벤트 1');
});
myEvent.addListener('event2', () => {
    console.log('이벤트 2');
});
myEvent.addListener('event2', () => {
    console.log('이벤트 2추가');
});

myEvent.emit('event1'); //이벤트 호출
myEvent.emit('event2');

myEvent.once('event3', () => {
    console.log('이벤트 3'); //한번만 실행되는 이벤트
})
myEvent.emit('event3'); //once로 정의-> 연속 호출을 해도 콜백이 한번만 실행
myEvent.emit('event3');

myEvent.on('event4', () => { // 이벤트 이름과 이벤트 발생시 콜백을 연결
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4'); //모든 이벤트리스터를 제거->호출 해도 콜백 X
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트 5');
}
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener); //이벤트 리스너를 제거
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));// listenerCount : 이벤트 리스너가 몇개 연결되었는지
