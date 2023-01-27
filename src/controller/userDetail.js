const User = require("../model/user.model")



const userDetails=async(req,res)=>{
    const {name,difficulty,score}=req.body

    let users=await User.create({name,difficulty,score})
    if(users){
        res.send({status:true,users})
    }
    else {
        res.send("not added")
    }
}
const userScore=async(req,res)=>{
    const {name,difficulty,score}=req.body
    let findUser=await User.findOne({name,difficulty})
    if(findUser){

        let updated=await User.findByIdAndUpdate(findUser._id,{score:score},{new:true})
        if(updated){
            res.send({status:true,updated})
        }
    }
    else {
        res.send("not updated")
    }
}

module.exports={userDetails,userScore}