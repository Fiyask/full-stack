const router =require("express").Router()
const{test, signupController,signinController} =require("./controller/user.controller")
 
router.get("/",test)
router.post("/signup",signupController)
router.post("/signin",signinController)

module.exports = router