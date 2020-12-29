/* 2.1.6 프로미스 */
/* 각 콜벡 함수마다 에러도 따로 처리해줘야 함 */
/* Promise.all 을 활용하여 프로미스를 한번에 실행하기 */

const condition=true;
const promise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공');
    }
    else{
        reject('패');
    }
});

promise
    .then((message)=>{
    console.log(message) //성공한 경우 실행
    })
    .catch((error)=>{
    console.error(error); //실패한 경우 실행
    });

/* 각 콜벡 함수마다 에러도 따로 처리해줘야 함 */
function findAndSaveUser(Users)
{
    UsersError.findOne({})
    .then((user)=>{
        user.name='zero';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender: 'm'});
    })
    .then(user=>{
        return console.error(err);
    })
    .catch(err=>{
        console.error(err);
    });
}

/* promise.all 을 활용하여 프로미스를 한번에 실행하기 */
const promise1=Promise.resolve('성공1');
const promise2=Promise.resolve('성공2');
Promise.all([promise1, promise2])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error);
});

