const express=require('express')
const router=express.Router();
const {addnewUser,findUserwithsalarygreaterthan30000,findUserwithEXPgreaterthan2,findUserwith_yearGrad_after2015_and_exp_greaterthan1,update}=require('../Controller/userController')
// , findUser,update,deleteUser

router.post('/user',addnewUser)
router.get('/finduser30000',findUserwithsalarygreaterthan30000)
router.get('/finduser_exp2',findUserwithEXPgreaterthan2)
router.get('/findUserwith_yearGrad_after2015_and_exp_greaterthan1',findUserwith_yearGrad_after2015_and_exp_greaterthan1)
router.post('/update',update)
module.exports=router