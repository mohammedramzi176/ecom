var collection = require("../config/collection");
var db=require("../config/connection")
const bcrypt=require("bcrypt")


module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((response)=>{
                resolve(data.ops[0])
            })
        })
    }
}
