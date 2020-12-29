/* 2.1.5 비구조화 할당 */

var candyMachine={
    status :{
        name : 'node',
        count : 5,
    },
    getCandy: function(){
        this.status.count--;
        return this.status.count;
    }
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

//ES6로 변환
const candyMachine={
    status :{
        name : 'node',
        count : 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;
const {getCandy, status:{count}}=candyMachine;

candyMachine.getCandy();
console.log(candyMachine.status.name);
console.log(candyMachine.status.count);
console.log(candyMachine);
