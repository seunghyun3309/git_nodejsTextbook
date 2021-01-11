/* 2.1.7 async/await */
/* 일반함수-> async function, 프로미스 앞에 await를 붙여주기 */
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

/* 일반함수-> async function, 프로미스 앞에 await를 붙여주기 */
async function findAndSaveUser(Users){
    let user= await Users.findOne({});
    user.name = 'zero';
    user=await user.save();
    user=await Users.findOne({gender:'m'});
}

async function async(Users){
    try{
        let user= await Users.findOne({});
        user.name = 'zero';
        user=await user.save();
        user=await Users.findOne({gender:'m'});
        console.log('성공!');
    }catch(error)
    {
        console.error(error);
    }
}

/* Promise.all 을 활용하여 프로미스를 한번에 실행하기 */
const promise1=Promise.resolve('성공1');
const promise2=Promise.resolve('성공2');
(async()=>{
    for await(promise of[promise1, promise2]){
        console.log(promise);
    }
})();


