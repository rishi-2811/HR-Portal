const express=require('express')
const router=express.Router()
const authControllers=require('../Controllers/authControllers')

router.get('/signup',authControllers.signup_get)
router.post('/signup',authControllers.signup_post)
router.get('/login',authControllers.login_get)
router.post('/login',authControllers.login_post)
router.post('/logout',authControllers.logout)

module.exports=router;
