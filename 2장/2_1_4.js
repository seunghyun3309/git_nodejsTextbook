/* 2.1.4 화살표 함수 */
/* =>를 사용하여 function 안쓰고 return문을 줄일 수 있음 */
/* var-> const, function()삭제, that 삭제 */

function add1(x,y){
    return x+y;
}

const add2 = (x,y)=>{
    return x+y;
}

const add3=(x,y)=>x+y; 

const add4= (x,y)=>(x+y);

function not1(x)
{
    return !x;
}
const not2=x=>!x;

var relationshop1={
    name: 'zero',
    friends : ['nero', 'hero', 'zero'],
    logFriends: function(){
        var that  =this;
        this.friends.forEach(friend=>{
            console.log(that.name, friend);
        }); 
    },
}; 
relationshop1.logFriends();

//ES6 방식으로 변환

const relationshop2={
    name: 'zero',
    friends : ['nero', 'hero', 'zero'],
    logFriends(){
        //var that  =this;
        this.friends.forEach(friend=>{
            console.log(this.name, friend);
        }); 
    },
}; 
relationshop2.logFriends();

