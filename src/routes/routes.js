const express=require("express")
const { getRandom } = require("../controller/playZone")
const { userDetails, userScore } = require("../controller/userDetail")

const router=express.Router()


router
.post("/",userDetails)
.get("/getword",getRandom)
.post("/updatescore",userScore)



module.exports=router