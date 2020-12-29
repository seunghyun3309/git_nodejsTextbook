/*2.1.3 객체 리터럴*/
/* 객체 리터럴 : 속성명을 중복하는 경우 예방, 객체 내에서도 생성가능 */
var sayNode = function(){
    console.log('Node');
}
var es ='ES';

const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,        // sayNode: sayNode 와 같이 중복하는 경우 예방
    [es + 6]: 'Fantastic', // 속성명을 객체 안에서 생성 가능
};

newObject.sayNode(); //Nose
newObject.sayJS(); // JS
console.log(newObject.ES6); //Fantastic

