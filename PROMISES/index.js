//https://github.com/Abhinavav23/Javascript/blob/main/async.js

//promise is an object,which produces a value after an asynchronous operation

// has 3 states==>1)pending
    //          2)fulfilled
    //          3)rejected

//outcomes of promise> succes and failure
    //creating promise
    //using promise object
    let fetchUserId = (username)=> {
        return new Promise((resolve, reject)=>{
            if(username === rk){
                resolve('123')
            }else{
                reject('user is not found')
            }
        })
    }
    let getFriendList=(userId) =>
    {
        return new Promise((resolve,reject)=>
        {
            if(userId==="123"){
                let friendList = ['ram','shyam','lakshman']
                resolve(friendList)
            }else{
                reject('user id not found')
            }
        })
    }
    let getmessages